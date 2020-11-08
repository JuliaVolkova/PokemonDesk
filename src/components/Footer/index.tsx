import React from 'react';

import cn from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={cn(styles.footer)}>
      <ul className={cn(styles.linksList)}>
        <li className={cn(styles.listItem)}>Make with ❤</li>
        <li className={cn(styles.listItem)}>Ours Team</li>
      </ul>
    </footer>
  );
};

export default Footer;
