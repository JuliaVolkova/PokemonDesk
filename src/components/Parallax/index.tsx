import React, { useEffect, useState } from 'react';

import SmallPokeBallPng from 'images/pokeball_small.png';
import CloudPng from 'images/cloud_small.png';
import PokeBallPng from 'images/pokeball_big.png';
import CloudBigPng from 'images/cloud_big.png';
import PikachuPng from 'images/pikachu.png';

import styles from './Parallax.module.scss';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={styles.root}>
      <div
        className={styles.smallPokeBall}
        style={{transform: `translate(${screenY * 0.05}px, ${screenX * 0.05}px)`}}
      >
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={styles.cloud}
        style={{transform: `translate(${screenY * 0.04}px, ${screenX * 0.04}px)`}}
      >
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={styles.cloudBig}
        style={{transform: `translate(${screenY * 0.03}px, ${screenX * 0.03}px)`}}
      >
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>

      <div
        className={styles.pokeBall}
        style={{transform: `translate(${screenY * 0.02}px, ${screenX * 0.02}px)`}}
      >
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={styles.pikachu}
        style={{transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)`}}
      >
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
