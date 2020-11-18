import React, { useMemo, useState } from 'react';

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
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  // FIXME: fix type
  const {
    data,
    isLoading,
    isError,
  }: { data: PokemonsData | null, isLoading: boolean, isError: boolean } = useData('getPokemons', query, [searchValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((s) => ({
      ...s,
      name: event.target.value,
    }));
  };

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Something went wrong! :(</div>;
  }

  return <main className={cn(styles.root)}>
    <Heading size='l' title={!isLoading && `${data.total} Pokemons for you to choose your favorite`} />
    <div>
      <input type="text" value={searchValue} onChange={handleSearchChange} />
    </div>
    <section className={cn(styles.content)}>
      {!isLoading && data.pokemons.map((pokemon: Pokemon) => <PokemonCard data={pokemon} key={pokemon.name} />)}
    </section>
  </main>;
};

export default PokedexPage;
