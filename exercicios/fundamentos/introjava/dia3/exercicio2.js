// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.

let word = 'tryber';
var invertido = [];

for (index = 0; index < word.length; index += 1) {
  invertido.unshift(word[index]);
}

console.log(invertido.join(''));
