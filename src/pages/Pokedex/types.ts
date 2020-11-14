export type Stats = {
  attack: number;
  defense: number;
  hp: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
};

export type Pokemon = {
  abilities: string[];
  'base_experience': number;
  height: number;
  id: number;
  img: string;
  'is_default': boolean;
  name: string;
  'name_clean': string;
  order: number;
  stats: Stats;
  types: string[];
  weight: number;
};

export type PokemonsData = {
  count: number;
  limit: number;
  offset: number;
  pokemons: Pokemon[]
  total: number;
};