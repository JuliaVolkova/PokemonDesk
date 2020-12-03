import React, { FC } from 'react';

import Loader from 'components/Loader';
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
      : <div style={{minHeight: '100vh'}}>This pokemon id equal {data?.name}</div>}
  </>);
};

export default PokemonPage;
