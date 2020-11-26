import React, { useState } from 'react';

// @ts-ignore
import useData from 'hook/getData';
// @ts-ignore
import useDebounce from 'hook/useDebounce';
import cn from 'classnames';
// @ts-ignore
import PokemonCard from 'components/PokemonCard';
// @ts-ignore
import Heading from 'components/Heading';
import { IQuery } from '../../interface/query';
import styles from './Pokedex.module.scss';

import { Pokemon, PokemonsData } from './types';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 300)

  // FIXME: fix type
  const {
    data,
    isLoading,
    isError,
  }: { data: PokemonsData | null, isLoading: boolean, isError: boolean } = useData('getPokemons', query, [debouncedValue]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    setQuery((state) => ({
      ...state,
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
    <Heading size='l' title={`${data?.total || 0} Pokemons for you to choose your favorite`} />
    <input type="text" value={searchValue} onChange={handleSearchChange} className={cn(styles.input)} />
    <section className={cn(styles.content)}>
      {!isLoading && data?.pokemons.map((pokemon: Pokemon) => <PokemonCard data={pokemon} key={pokemon.name} />)}
    </section>
  </main>;
};

export default PokedexPage;
