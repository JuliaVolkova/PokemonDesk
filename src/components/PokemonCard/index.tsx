import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

type PokemonnDataStats = {
  attack: number;
  defense: number;
}

interface IPokemonData {
  img: string;
  name: string;
  stats: PokemonnDataStats
  types: string[]
}

const PokemonCard = ({ data }: { data: IPokemonData }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size='xs' className={s.titleName} title={data.name} />
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {data.stats.attack}
            </div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>
              {data.stats.defense}
            </div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {data.types.map((type) => <span className={s.label} key={type}>{type}</span>)}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={data.img}
             alt={data.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
