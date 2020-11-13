import React from 'react';
// @ts-ignore
import HomePage from 'pages/Home';
// @ts-ignore
import PokedexPage from 'pages/Pokedex';
// @ts-ignore
import EmptyPage from 'pages/EmptyPage';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation'
}

interface IGeneralMenu {
  title: string;
  to: LinkEnum;
  component: () => JSX.Element;
}

// @ts-ignore
export const GENERAL_MENU: Array<IGeneralMenu> = [
  {
    title: 'Home',
    to: LinkEnum.HOME,
    component: () => <HomePage />
  },
  {
    title: 'Pokedex',
    to: LinkEnum.POKEDEX,
    component: () => <PokedexPage />
  },
  {
    title: 'Legendaries',
    to: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage/>
  },
  {
    title: 'Documentation',
    to: LinkEnum.DOCUMENTATION,
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
