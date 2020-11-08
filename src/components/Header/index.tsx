import React from 'react';
import { NavLink, Link } from 'react-router-dom';

// @ts-ignore
import { headerLinks } from 'enums/header';

import cn from 'classnames';
// @ts-ignore
import logo from 'images/logo.svg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={cn(styles.header)}>
      <nav className={cn(styles.navigation)}>
        <Link to="/">
          <img src={logo} width={180} height={52} alt="Pokemon desk logo" />
        </Link>

        <ul className={cn(styles.navigationList)}>
          {headerLinks.map((link: { title: string; to: string }) => (
            <li className={cn(styles.navItem)} key={link.title}>
              <NavLink to={link.to} className={cn(styles.navLink)}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
