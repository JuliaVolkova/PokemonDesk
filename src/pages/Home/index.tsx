import React from 'react';

import cn from 'classnames';

// @ts-ignore
import Button from 'components/Button';
// @ts-ignore
import Parallax from 'components/Parallax';
// @ts-ignore
import Heading from 'components/Heading';

import styles from './Home.module.scss';

const HomePage = ({ content }: { content: string }) => {
  return (
    <>
      <div className={cn(styles.root)}>
        <main className={cn(styles.main)}>
          <div>
            <div style={{ maxWidth: 450, margin: '0 42px' }}>
              <Heading size='xl' title='Find all your favorite Pokemon' />
              <Button
                children='See pokemons'
                onClick={() => console.log('Click!!')}
                width={230}
                size='large'
              />
            </div>
          </div>
          <Parallax />
        </main>
      </div>
    </>
  );
};

export default HomePage;
