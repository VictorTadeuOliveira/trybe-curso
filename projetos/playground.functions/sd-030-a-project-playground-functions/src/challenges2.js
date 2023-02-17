/* eslint-disable max-lines-per-function */
/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (index = 0; index < array.length; index += 1) {
    if (array[index] > 9 || array[index] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let counts = {};
  array.forEach(function (counter) {
    counts[counter] = (counts[counter] || 0) + 1;
  });
  const error3 = Object.values(counts);
  for (index = 0; index <= 9; index += 1) {
    if (error3[index] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`;
}

// Desafio 12 -  Crie a função triangleCheck

function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  } if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13 - Crie a função hydrate

function hydrate(bebeu) {
  let beberArray = bebeu.match(/[0-9]+/g);
  let beberCopos = 0;
  for (index = 0; index < beberArray.length; index += 1) {
    beberCopos += +beberArray[index];
  }
  if (beberCopos === 1) {
    return `${beberCopos} copo de água`;
  }
  return `${beberCopos} copos de água`;
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
