import React from 'react';

import cn from 'classnames';
// @ts-ignore
import PokemonCard from 'components/PokemonCard';
import styles from './Pokedex.module.scss';

import { pokemons } from '../../pokemons';

const PokedexPage = () => {
  return <main className={cn(styles.root)}>{
    pokemons.map((pokemon, index) => <PokemonCard data={pokemon} key={pokemon.name} />)
  }</main>;
};

export default PokedexPage;
