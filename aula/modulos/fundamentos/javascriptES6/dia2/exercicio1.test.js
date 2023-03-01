const myRemove = require('./exercicio1.js');

let newArr = [1, 2, 3, 4];

describe('Testa exercício 1', () => {
  it('Retorna o valor 1, 2 e 4', () => {
    expect(myRemove(newArr, 3)).toEqual([1, 2, 4]);
  });
  it('Não retorna o valor 1, 2, 3 e 4', () => {
    expect(myRemove(newArr, 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Retorna o valor 1, 2, 3 e 4', () => {
    expect(myRemove(newArr, 5)).toEqual([1, 2, 3, 4]);
  });
});