import React from 'react';

import cn from 'classnames';
import styles from './Home.module.scss';

// @ts-ignore
import Button from 'components/Button';
// @ts-ignore
import Parallax from 'components/Parallax';

const HomePage = ({ content }: { content: string }) => {
  return (
    <>
      <div className={cn(styles.root)}>
        <main className={cn(styles.main)}>
        <Button children='See pokemons' onClick={()=> console.log('Click!!')}/>
        <Parallax />
        </main>
      </div>
    </>
  );
};

export default HomePage;
