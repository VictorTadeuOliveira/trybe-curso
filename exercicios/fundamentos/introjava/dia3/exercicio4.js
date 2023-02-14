// Escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let maiorprimo = 0;

for (numero = 2; numero <= 50; numero += 1) {
  let primo = true;
  for (divisor = 2; divisor < numero; divisor += 1) {
    if (numero % divisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorprimo = numero;
  }
}

console.log(maiorprimo);
