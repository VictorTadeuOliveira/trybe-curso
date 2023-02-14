//Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra do array e outro que imprima a menor.

let array = ['java', 'javascript', 'python', 'html', 'css'];

var maior = array[0];
var menor = array[0];

for (index = 1; index < array.length; index += 1) {
  if (array[index].length > maior.length) {
    maior = array[index];
  } if (array[index].length < menor.length) {
    menor = array[index]
  }
}

console.log(maior);
console.log(menor);