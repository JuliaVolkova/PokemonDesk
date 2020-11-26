import React, { PropsWithChildren } from 'react';
// @ts-ignore
import HomePage from 'pages/Home';
// @ts-ignore
import PokedexPage from 'pages/Pokedex';
// @ts-ignore
import EmptyPage from 'pages/EmptyPage';
// @ts-ignore
import PokemonPage, { PokemonProps } from 'pages/Pokemon';

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  POKEMON = '/pokedex/:id'
}

interface IGeneralMenu {
  title: string;
  to: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

// @ts-ignore
export const GENERAL_MENU: Array<IGeneralMenu> = [
  {
    title: 'Home',
    to: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokedex',
    to: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    to: LinkEnum.LEGENDARIES,
    component: () => <EmptyPage />,
  },
  {
    title: 'Documentation',
    to: LinkEnum.DOCUMENTATION,
    component: () => <EmptyPage />,
  },
];

export const SECONDARY_ROUTES: Array<IGeneralMenu> = [
  {
    title: 'Pokemon',
    to: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <PokemonPage id={id} />,
  },
];

export const routes = [...GENERAL_MENU, ...SECONDARY_ROUTES].reduce((acc, item) => ({
  ...acc,
  [item.to]: item.component,
}), {});

