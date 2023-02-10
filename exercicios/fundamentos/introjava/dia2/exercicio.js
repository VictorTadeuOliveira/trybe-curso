let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/////////////////////////////////////////////////////
// Requisito 1
/*for (index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
} */

/////////////////////////////////////////////////////
//Requisito 2

/* var resultado = 0;

for (index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}

console.log(resultado); */

/////////////////////////////////////////////////////
//Requisito 3

/* var resultado = 0;

for (index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}

console.log(resultado / numbers.length);  */

/////////////////////////////////////////////////////
//Requisito 4

/* var soma = 0;

for (index = 0; index < numbers.length; index += 1) {
  soma = soma + numbers[index];
}

if (soma / numbers.length > 20) {
  console.log("valor maior que 20");
} else {
  console.log("valor menor ou igual a 20");
}
 */

/////////////////////////////////////////////////////
//Requisito 5

/* var maior = numbers[0];

for (index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > maior) {
    maior = numbers[index];
  }
}
console.log(maior); */

/////////////////////////////////////////////////////
//Requisito 6

/* var odds = 0;

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 == 1) {
    odds += 1;
  }
}


if (odds == 1) {
  console.log("há apenas um número ímpar");
} else if (odds > 1) {
  console.log("há " + odds + " números ímpares");
} else {
  console.log("nenhum valor ímpar encontrado");
} */

/////////////////////////////////////////////////////
//Requisito 7

/* var menor = numbers[0];

for (index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menor) {
    menor = numbers[index];
  }
}
console.log(menor);  */

/////////////////////////////////////////////////////
//Requisito 8

/* var dividir = [];

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 1 && numbers[index] < 25) {
  dividir.push(numbers[index]);
  }
}

console.log(dividir); */

/////////////////////////////////////////////////////
//Requisito 9

/* var dividir = [];

for (index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > 1 && numbers[index] < 25) {
  dividir.push(numbers[index] / 2);
  }
}

console.log(dividir); */
