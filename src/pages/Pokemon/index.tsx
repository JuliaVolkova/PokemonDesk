import React, { FC } from 'react';

export interface PokemonProps {
  id: string | number
}

const Pokemon: FC<PokemonProps> = ({id}) => {
  return <div>This pokemon id equal {id}</div>;
};

export default Pokemon;
