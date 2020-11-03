import React from 'react';

import cn from 'classnames';
import styles from './Header.module.scss';
// @ts-ignore
import logo from '../../../public/images/logo.svg';

const Header = () => {
    return <header className={cn(styles.header)}>
        <nav className={cn(styles.navigation)}>
            <img src={logo} width={180} height={52} alt={'Pokemon desk logo'}/>
            <ul className={cn(styles.navigationList)}>
                <li className={cn(styles.navItem)}>Home</li>
                <li className={cn(styles.navItem)}>Pokédex</li>
                <li className={cn(styles.navItem)}>Legendaries</li>
                <li className={cn(styles.navItem)}>Documentation</li>
            </ul>
        </nav>
    </header>
}

export default Header;
