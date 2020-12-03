// @ts-ignore
import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('Should get empty string and return empty string', () => {
    const string = toCapitalizeFirstLetter('');
    expect(string).toBe('');
  });

  test('Should get string in lower case and return string with capitalized first letter', () => {
    const string = toCapitalizeFirstLetter('test this awesome string');
    expect(string).toBe('Test this awesome string');
  });

  test('Should get string in lower case with capitalized first letter and return string without any changes', () => {
    const string = toCapitalizeFirstLetter('Test this awesome string');
    expect(string).toBe('Test this awesome string');
  });

  test('Should get string in upper case and return string in lower case and capitalized first letter', () => {
    const string = toCapitalizeFirstLetter('TEST THIS AWESOME STRING');
    expect(string).toBe('Test this awesome string');
  });
});