import React from 'react';

import cn from 'classnames';
import styles from './App.module.scss';
import './custom.css';

const App = () => {
    return (
        <div className={cn(styles.header, 'margin')}>Hey-hey!!! This is App Component!</div>
    )
}

export default App;
