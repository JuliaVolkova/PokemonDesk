import React, { useEffect, useState } from 'react';

import cn from 'classnames';
// @ts-ignore
import PokemonCard from 'components/PokemonCard';
import styles from './Pokedex.module.scss';

import Heading from '../../components/Heading';

const API_URL = 'http://zar.hosthot.ru/api/v1/pokemons';

const PokedexPage = () => {
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setTotalPokemons(data.total);
        setPokemons(data.pokemons);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Something went wrong! :(</div>;
  }

  return <main className={cn(styles.root)}>
    <Heading size='l' title={`${totalPokemons} Pokemons for you to choose your favorite`} />
    <section className={cn(styles.content)}>
      {pokemons.map((pokemon: {name: string}) => <PokemonCard data={pokemon} key={pokemon.name} />)}
    </section>
  </main>;
};

export default PokedexPage;
