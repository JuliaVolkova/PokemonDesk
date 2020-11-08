import React from 'react';

import styles from './Home.module.scss';
import cn from 'classnames';

const HomePage = ({ content }: { content: string }) => {
  return (
    <div className={cn(styles.root)}>{content}</div>
  );
};

export default HomePage;
