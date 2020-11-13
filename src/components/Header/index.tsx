import React from 'react';
import { A, usePath } from 'hookrouter';

// @ts-ignore
import { GENERAL_MENU,  LinkEnum } from 'enums/header';

import cn from 'classnames';
import logo from 'images/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
  const path = usePath();
  return (
    <header className={cn(styles.header)}>
      <nav className={cn(styles.navigation)}>
        <A href={LinkEnum.HOME}>
          <img src={logo} width={180} height={52} alt="Pokemon desk logo" />
        </A>

        <ul className={cn(styles.navigationList)}>
          {GENERAL_MENU.map((link: { title: string; to: string }) => (
            <li className={cn(styles.navItem)} key={link.title}>
              <A href={link.to} className={cn(styles.navLink, {[styles.activeLink]: link.to === path} )}>
                {link.title}
              </A>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
