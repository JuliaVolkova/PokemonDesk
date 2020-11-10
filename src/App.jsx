import React from 'react';
import { useRoutes } from 'hookrouter';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { routes } from 'enums/header';

import './index.css';

const App = () => {
  const match = useRoutes(routes);
  return <>
    <Header />
    {match}
    <Footer />
  </>;
};

export default App;
