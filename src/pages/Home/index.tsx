import React from 'react';
import cn from 'classnames';
import { navigate } from 'hookrouter';

// @ts-ignore
import { LinkEnum } from 'enums/header';

// @ts-ignore
import Button from 'components/Button';
// @ts-ignore
import Parallax from 'components/Parallax';
// @ts-ignore
import Heading from 'components/Heading';

import styles from './Home.module.scss';

const HomePage = () => {
  return (
    <>
      <div className={cn(styles.root)}>
        <main className={cn(styles.main)}>
          <div style={{ flexBasis: 450 }}>
            <div style={{ maxWidth: 450, marginLeft: '32px' }}>
              <Heading size='xl' title='Find all your favorite Pokemon' />
            </div>
            <div style={{ maxWidth: 520, marginLeft: '32px' }}>
              <p className={cn(styles.paragraph)}>
                You can know the type of Pokemon, its strengths, disadvantages and abilities
              </p>
              <Button
                children='See pokemons'
                onClick={() => navigate(LinkEnum.POKEDEX)}
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
