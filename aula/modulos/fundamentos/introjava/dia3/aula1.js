//Utilizando a lógica apresentada, qual deve ser o valor salvo na variável n para que o resultado impresso pelo console.log seja 55?

const n = `"?"` ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);

//O resultado será 9. Pois a partir de 0, n será incrementando em +1 e subtraído do resultado. Logo resultado - 1, - 2, - 3 e assim por diante até atingir - 9 e o resultado retornar 55. 