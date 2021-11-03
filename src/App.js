import React from 'react';
import Layout from './components/Layout';
import ContentSection from './sections/ContentSection';
import SelectorSection from './sections/SelectorSection';

import PokemonImage from './components/PokemonImage';
import Message from './components/Message';
import Button from './components/Button';
import PokemonSelector from './components/PokemonSelector';
import CountdownTimer from './components/CountdownTimer';
import ScoreCounter from './components/ScoreCounter';

import countdownReducer from './reducers/countdownReducer';
import gameStatusReducer from './reducers/gameStatusReducer';

import fetchPokemon from './services/fetchPokemon';

function App() {
  const [message, setMessage] = React.useState(null);
  const [pokemonData, setPokemonData] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useReducer(gameStatusReducer, {
    playing: false,
    currentRound: 0,
    roundsCompleted: 0,
    score: 0,
  });
  const [countdown, setCountdown] = React.useReducer(countdownReducer, {
    isActive: false,
    time: 5,
  });

  const numberOfRounds = 3;
  const pokemonPerRound = 4;

  // Populate Pokemon Data
  React.useEffect(() => {
    if (!(pokemonData.length < numberOfRounds)) {
      return;
    }
    fetchPokemon(pokemonPerRound).then((data) =>
      setPokemonData((state) => [...state, data])
    );
  }, [pokemonData]);

  // Countdown Timer Interval
  React.useEffect(() => {
    if (!countdown.isActive) {
      return;
    }
    if (countdown.time > 0) {
      const countdownInterval = setInterval(
        () => setCountdown({ type: 'subtract' }),
        1000
      );
      return () => clearInterval(countdownInterval);
    } else {
      endRound();
      setMessage('Ran Out Of Time!');
    }
  }, [countdown]);

  const startRound = () => {
    setCountdown({ type: 'start' });
    setMessage(null);
  };

  const endRound = () => {
    setCountdown({ type: 'stop' });
    setGameStatus({ type: 'completeRound' });
  };

  const getNewRound = () => {
    if (!gameStatus.playing) {
      setGameStatus({ type: 'start' });
      startRound();
    } else if (gameStatus.roundsCompleted === numberOfRounds) {
      setGameStatus({ type: 'final' });
      setPokemonData([]);
      setMessage('Total Score: ' + gameStatus.score + '/' + numberOfRounds);
    } else {
      setGameStatus({ type: 'nextRound' });
      startRound();
    }
  };

  const selectPokemon = (pokemon) => {
    endRound();
    const answer = pokemonData[gameStatus.currentRound].filter(
      (pokemon) => pokemon.answer === true
    )[0];
    if (pokemon.id === answer.id) {
      setMessage('Correct!');
      setGameStatus({ type: 'score' });
    } else {
      setMessage('Wrong!');
    }
  };

  return (
    <Layout playing={gameStatus.playing}>
      <ContentSection>
        {gameStatus.playing && (
          <PokemonImage
            guessing={countdown.isActive}
            pokemonData={pokemonData[gameStatus.currentRound]}
          />
        )}
        <div>
          <Message
            message={message}
            playing={gameStatus.playing}
            pokemonData={pokemonData[gameStatus.currentRound]}
          />
          {countdown.isActive && <CountdownTimer time={countdown.time} />}
          {gameStatus.playing && (
            <ScoreCounter
              score={gameStatus.score}
              roundsCompleted={gameStatus.roundsCompleted}
            />
          )}
        </div>
      </ContentSection>
      <SelectorSection>
        {countdown.isActive ? (
          <PokemonSelector
            pokemonData={pokemonData[gameStatus.currentRound]}
            selectPokemon={selectPokemon}
          />
        ) : !pokemonData[0] ||
          (gameStatus.roundsCompleted < numberOfRounds &&
            !pokemonData[gameStatus.currentRound + 1]) ? (
          <Button disabled>Loading...</Button>
        ) : (
          <Button onClick={getNewRound}>
            {gameStatus.playing
              ? gameStatus.roundsCompleted < numberOfRounds
                ? 'Next Round'
                : 'View Final Score'
              : gameStatus.score
              ? 'Play Again?'
              : 'Start'}
          </Button>
        )}
      </SelectorSection>
    </Layout>
  );
}

export default App;
