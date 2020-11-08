import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';

import './index.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/pokédex">
            <main className="temporary_block">Pokédex</main>
          </Route>
          <Route path="/legendaries">
            <main className="temporary_block">Legendaries</main>
          </Route>
          <Route path="/documentation">
            <main className="temporary_block">Documentation</main>
          </Route>
          <Route path="/">
            <main className="temporary_block">Home</main>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
