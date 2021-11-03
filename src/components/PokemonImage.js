import React from 'react';
import styled from 'styled-components';
import burstBackground from '../assets/images/burst-bg.png'

const StyledPokemonImage = styled.div`
  position: relative;
  z-index: 1;
  max-width: 500px;
  .pokemon-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    animation: show-bg 0.5s;
    @keyframes show-bg {
      from {
        transform: scale(0);
      }
      50% {
        transform: scale(1.1);
      }
      to {
        transform: scale(1);
      }
    }
    img {
      position: relative;
      object-fit: contain;
      width: 100%;
      height: 100%;
      transform: scale(3);
      animation-name: pulse;
      animation-duration: 0.75s;
      animation-iteration-count: infinite;
      animation-timing-function: step-end;
      @keyframes pulse {
        from {
          transform: scale(3.5) rotate(0deg);
        }

        20% {
          transform: scale(4) rotate(55deg);
        }
        40% {
          transform: scale(3.5) rotate(110deg);
        }
        60% {
          transform: scale(3) rotate(165deg);
        }
        80% {
          transform: scale(3.5) rotate(220deg);
        }
        to {
          transform: scale(4) rotate(295deg);
        }
      }
    }
  }
  .pokemon-image {
    position: relative;
    z-index: 3;
    filter: sepia(0) drop-shadow(-4px 6px 0 var(--pokemon-blue-light));
    img {
      position: relative;
      max-width: 100%;
      transition: 0.5s filter;
    }
    &.silhouette {
      filter: invert(50%) brightness(50%) sepia(100%) saturate(500%) hue-rotate(165deg);
      animation: 0.5s show-pokemon;
      img {
        filter: grayscale(100%) brightness(0) hue-rotate(180deg);
      }
    }
    @keyframes show-pokemon {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
  }
`;

const PokemonImage = ({ guessing, pokemonData }) => {
  return (
    <StyledPokemonImage>
      <div className='pokemon-bg'>
        <img src={burstBackground} />
      </div>
      <div className={`pokemon-image ${guessing ? 'silhouette' : ''}`}>
        <img
          src={
            pokemonData.filter((pokemon) => pokemon.answer === true)[0]
              .image
          }
          alt={`${
            guessing
              ? 'Unknown Pokemon'
              : pokemonData.filter((pokemon) => pokemon.answer === true)[0]
                  .name
          }`}
        />
      </div>
    </StyledPokemonImage>
  );
};

export default PokemonImage;
