import React from 'react';
// @ts-ignore
import HomePage from 'pages/Home';
// @ts-ignore
import PokedexPage from 'pages/Pokedex';
// @ts-ignore
import EmptyPage from 'pages/EmptyPage';

interface headerLinkObject {
  title: string;
  to: string;
  component: () => JSX.Element;
}

// @ts-ignore
export const GENERAL_MENU: Array<headerLinkObject> = [
  {
    title: 'Home',
    to: '/',
    component: () => <HomePage />
  },
  {
    title: 'Pokedex',
    to: '/pokedex',
    component: () => <PokedexPage />
  },
  {
    title: 'Legendaries',
    to: '/legendaries',
    component: () => <EmptyPage/>
  },
  {
    title: 'Documentation',
    to: '/documentation',
    component: () => <EmptyPage/>
  },
];

GENERAL_MENU.reduce((acc, item) => ({...acc, [item.to]: item.component}), {});

export const routes = {
  '/': () => <HomePage/>,
  '/pokedex': () => <PokedexPage/>,
  '/documentation': () => <EmptyPage/>,
  '/legendaries': () => <EmptyPage/>,
}
