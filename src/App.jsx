import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from './pages/Home';
import PokedexPage from './pages/Pokedex';
import EmptyPage from './pages/EmptyPage';

import './index.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/pokédex">
            <PokedexPage />
          </Route>
          <Route path="/legendaries">
            <EmptyPage />
          </Route>
          <Route path="/documentation">
            <EmptyPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
