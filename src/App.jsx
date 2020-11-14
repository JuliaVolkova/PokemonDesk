import React from 'react';
import { useRoutes } from 'hookrouter';

import Header from 'components/Header';
import Footer from 'components/Footer';
import NotFoundPage from 'pages/NotFoundPage';
import { routes } from 'enums/header';

import './index.css';

const App = () => {
  const match = useRoutes(routes);
  return match
    ? <>
      <Header />
      {match}
      <Footer />
    </>
    : <NotFoundPage />;
};

export default App;
