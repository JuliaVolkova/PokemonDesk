// @ts-ignore
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Should get 2 arguments "getPokemons" and empty object ' +
    'and as output should return object with pathname, protocol, host fields and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemons', {});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {},
    });
  });

  test('Should get 2 arguments "getPokemons" and {name: "Pikachu"} ' +
    'and as output should return object with pathname, protocol, host fields and query object with field name equals Pikachu', () => {
    const url = getUrlWithParamsConfig('getPokemons', { name: 'Pikachu' });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {name: "Pikachu"},
    });
  });

  test('Should get 2 arguments "getPokemons" and {id: 25} ' +
    'and as output should return object with pathname, protocol, host fields and empty query', () => {
    const url = getUrlWithParamsConfig('getPokemon', {id: 25});
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});