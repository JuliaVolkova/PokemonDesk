import React, {FC} from 'react';
import cn from 'classnames';
import PokeBallPng from 'images/pokeball_big.png';
import styles from './Loader.module.scss';

const Loader: FC = () => {
  return <div className={cn(styles.block)}>
    <img src={PokeBallPng} alt="loader" width={100} height={100} className={cn(styles.root)}/>
  </div>;
};

export default Loader;
