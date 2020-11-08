import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from './pages/Home';

import './index.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/pokédex">
            <HomePage content='Pokédex'/>
          </Route>
          <Route path="/legendaries">
            <HomePage content='Legendaries'/>
          </Route>
          <Route path="/documentation">
            <HomePage content='Documentation'/>
          </Route>
          <Route path="/">
            <HomePage content='Home' />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
