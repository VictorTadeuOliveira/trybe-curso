/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
// Desafio 1 - Crie a função compareTrue

function compareTrue(para1, para2) {
  if (para1 && para2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 3 - Crie a função concatName

function concatName(nomes) {
  const concat = [nomes[nomes.length - 1], nomes[0]];
  return `${concat[0]}, ${concat[1]}`;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 5 - Crie a função highestCount

function highestCount(numeros) {
  let maior = numeros[0];
  let repete = 1;
  for (index = 1; index < numeros.length; index += 1) {
    if (numeros[index] > maior) {
      maior = numeros[index];
      repete = 1;
    } else if (numeros[index] === maior) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcRectangleArea(base, height) {
  return (base * height);
}

function calcAllAreas(base, height, form) {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${(base * height) / 2}`;
  } if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${base * height}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
}

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  } if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(numeros) {
  const nume1 = numeros;
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      nume1[index] = 'fizzBuzz';
    } else if (numeros[index] % 3 !== 0 && numeros[index] % 5 !== 0) {
      nume1[index] = 'bug!';
    } else if (numeros[index] % 3 === 0 && numeros[index] % 5 !== 0) {
      nume1[index] = 'fizz';
    } else {
      nume1[index] = 'buzz';
    }
  }
  return nume1;
}

// Desafio 9 - Crie a função encode e a função decode

function encode(frase) {
  let coded = frase.split('');
  for (index = 0; index < coded.length; index += 1) {
    if (coded[index] === 'a') {
      coded[index] = '1';
    } else if (coded[index] === 'e') {
      coded[index] = '2';
    } else if (coded[index] === 'i') {
      coded[index] = '3';
    } else if (coded[index] === 'o') {
      coded[index] = '4';
    } else if (coded[index] === 'u') {
      coded[index] = '5';
    }
  }
  let coded2 = coded.join('');
  return coded2;
}

function decode(frase) {
  let coded = frase.split('');
  for (index = 0; index < coded.length; index += 1) {
    if (coded[index] === '1') {
      coded[index] = 'a';
    } else if (coded[index] === '2') {
      coded[index] = 'e';
    } else if (coded[index] === '3') {
      coded[index] = 'i';
    } else if (coded[index] === '4') {
      coded[index] = 'o';
    } else if (coded[index] === '5') {
      coded[index] = 'u';
    }
  }
  let coded2 = coded.join('');
  return coded2;
}

// Desafio 10 - Crie a função techList

function techList(techs, nome) {
  const lista = [];
  const sortTechs = techs.sort();
  for (index = 0; index < sortTechs.length; index += 1) {
    lista[index] = {
      tech: sortTechs[index],
      name: nome,
    };
  }
  return lista;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
