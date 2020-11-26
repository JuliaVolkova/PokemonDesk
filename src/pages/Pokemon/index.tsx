import React, { FC } from 'react';
// @ts-ignore
import Loader from 'components/Loader';
// @ts-ignore
import useData from 'hook/getData';
import { Pokemon } from '../Pokedex/types';

export interface PokemonProps {
  id: string | number
}

const PokemonPage: FC<PokemonProps> = ({ id }) => {
  const {
    data,
    isLoading,
  }: { data: Pokemon | null, isLoading: boolean, isError: boolean } = useData('getPokemon', { id });

  return (<>
    {isLoading
      ? <Loader />
      : <div>This pokemon id equal {data?.name}</div>}
  </>);
};

export default PokemonPage;
