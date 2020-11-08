import React from 'react';

import cn from 'classnames';
import styles from './Home.module.scss';

// @ts-ignore
import Button from 'components/Button';

const HomePage = ({ content }: { content: string }) => {
  return (
    <>
      <div className={cn(styles.root)}>{content}
        <Button children='See pokemons' onClick={()=> console.log('Click!!')}/>
      </div>
    </>
  );
};

export default HomePage;
