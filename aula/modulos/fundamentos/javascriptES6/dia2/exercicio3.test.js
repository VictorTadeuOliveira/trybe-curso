const {
  encode, 
  decode,
} = require('./exercicio3.js');

describe('Teste da função encode', () => {
  it('O resultado é true', () => {
    expect(typeof encode === 'function').toBe(true);
  });
  it('O resultado é 1, 2, 3, 4, 5', () => {
    expect(encode('a', 'e', 'i', 'o', 'u')).toEqual('1', '2', '3', '4', '5');
  });
  it('O resultado é 12345 bcdfghjklmnpqrstvxyz', () => {
    expect(encode('aeiou bcdfghjklmnpqrstvxyz')).toEqual('12345 bcdfghjklmnpqrstvxyz');
  });
  it('O resultado é true', () => {
    expect(encode('catorze14')).toHaveLength(9);
  });
});

describe('Teste da função decode', () => {
  it('O resultado é true', () => {
    expect(typeof decode === 'function').toBe(true);
  });
  it('O resultado é a, e, i, o, u', () => {
    expect(decode('1', '2' ,'3' ,'4', '5')).toEqual('a', 'e', 'i', 'o', 'u');
  });
  it('O resultado é aeiou 67890', () => {
    expect(decode('12345 67890')).toEqual('aeiou 67890');
  });
  it('O resultado é true', () => {
    expect(decode('catorze14')).toHaveLength(9);
  });
});