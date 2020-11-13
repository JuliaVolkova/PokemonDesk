import React, { useEffect, useState } from 'react';

import cn from 'classnames';
// @ts-ignore
import PokemonCard from 'components/PokemonCard';
// @ts-ignore
import Heading from 'components/Heading';
import styles from './Pokedex.module.scss';

import { Pokemon, PokemonsData } from './types';

const API_URL = 'http://zar.hosthot.ru/api/v1/pokemons';

const usePokemons = () => {
  const [pokemonsData, setPokemonsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setPokemonsData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    pokemonsData,
    isLoading,
    isError,
  };
};

const PokedexPage = () => {
  const {
    pokemonsData,
    isLoading,
    isError,
  }: { pokemonsData: PokemonsData, isLoading: boolean, isError: boolean } = usePokemons();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Something went wrong! :(</div>;
  }

  return <main className={cn(styles.root)}>
    <Heading size='l' title={`${pokemonsData.total} Pokemons for you to choose your favorite`} />
    <section className={cn(styles.content)}>
      {pokemonsData.pokemons.map((pokemon: Pokemon) => <PokemonCard data={pokemon} key={pokemon.name} />)}
    </section>
  </main>;
};

export default PokedexPage;
