let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var resultado = numbers[0];

for (index = 1; index < numbers.length; index += 1) {
  resultado = resultado + numbers[index];
}

console.log(resultado);