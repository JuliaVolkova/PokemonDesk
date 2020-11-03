import React from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';
import styles from './Header.module.scss';
// @ts-ignore
import logo from '../../../public/images/logo.svg';

const Header = () => {
    return <header className={cn(styles.header)}>
        <nav className={cn(styles.navigation)}>
            <img src={logo} width={180} height={52} alt={'Pokemon desk logo'}/>
            <ul className={cn(styles.navigationList)}>
                <li className={cn(styles.navItem)}>
                    <NavLink to='/' className={cn(styles.navLink)}>Home</NavLink></li>
                <li className={cn(styles.navItem)}>
                    <NavLink to='/pokédex' className={cn(styles.navLink)}>Pokédex
                    </NavLink></li>
                <li className={cn(styles.navItem)}>
                    <NavLink to='/legendaries' className={cn(styles.navLink)}>Legendaries
                    </NavLink></li>
                <li className={cn(styles.navItem)}>
                    <NavLink to='/documentation' className={cn(styles.navLink)}>Documentation
                    </NavLink></li>
            </ul>
        </nav>
    </header>
}

export default Header;
