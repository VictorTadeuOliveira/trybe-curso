const myFizzBuzz = require('./exercicio2.js');

describe('Testa exercício 2', () => {
  it('Resultado é fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Resultado é fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it('Resultado é buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it('Resultado é 8', () => {
    expect(myFizzBuzz(8)).toBe(8);
  });
  it('Resultado é false', () => {
    expect(myFizzBuzz('n')).toBe(false);
  });
});