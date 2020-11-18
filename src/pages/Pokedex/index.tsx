import React from 'react';

import cn from 'classnames';
// @ts-ignore
import PokemonCard from 'components/PokemonCard';
// @ts-ignore
import Heading from 'components/Heading';
import styles from './Pokedex.module.scss';

import { Pokemon, PokemonsData } from './types';
// @ts-ignore
import useData from 'hook/getData';

const PokedexPage = () => {
  // FIXME: fix type
  const {
    data,
    isLoading,
    isError,
  }: { data: PokemonsData, isLoading: boolean, isError: boolean } | null = useData('getPokemons');

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Something went wrong! :(</div>;
  }

  return <main className={cn(styles.root)}>
    <Heading size='l' title={`${data.total} Pokemons for you to choose your favorite`} />
    <section className={cn(styles.content)}>
      {data.pokemons.map((pokemon: Pokemon) => <PokemonCard data={pokemon} key={pokemon.name} />)}
    </section>
  </main>;
};

export default PokedexPage;
