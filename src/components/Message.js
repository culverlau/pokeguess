import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.div``;

const Message = ({ message, playing, pokemonData }) => {
  return (
    <StyledMessage>
      {message ? <h2>{message}</h2> : <h1>Who's That Pokémon?</h1>}
      {message && playing && (
        <h2>
          It's{' '}
          {
            pokemonData.filter((pokemon) => pokemon.answer === true)[0]
              .name
          }
          !
        </h2>
      )}
    </StyledMessage>
  );
};

export default Message;
