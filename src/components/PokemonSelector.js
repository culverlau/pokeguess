import React from 'react';
import Button from './Button';

const PokemonSelector = ({pokemonData, selectPokemon}) => {
  return pokemonData.map((pokemon, i) => (
    <Button onClick={() => selectPokemon(pokemon)} key={i}>
      {pokemon.name}
    </Button>
  ));
};

export default PokemonSelector