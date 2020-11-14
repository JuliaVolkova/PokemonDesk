import React from 'react';
import { navigate } from 'hookrouter';

import cn from 'classnames';

// @ts-ignore
import { LinkEnum } from 'enums/header';
// @ts-ignore
import { ThemeEnum } from 'enums/themes';
// @ts-ignore
import Button from 'components/Button';
import rocketTeamImage from 'images/teamRocket.png';
import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return <div className={cn(styles.root)}>
    <section className={cn(styles.content)}>
      <img src={rocketTeamImage} width={590} height={523} alt='not found page' />
      <p className={cn(styles.paragraph)}>
        <span className={cn(styles.paragraphLightPart)}>The rocket team</span>
        <span className={cn(styles.paragraphDarkPart)}> has won this time.</span>
      </p>
      <Button
        children='Return'
        onClick={() => navigate(LinkEnum.HOME)}
        width={230}
        size='large'
        theme={ThemeEnum.$primary}
      />
    </section>
  </div>;
};

export default NotFoundPage;