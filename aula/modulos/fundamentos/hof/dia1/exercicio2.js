const sorteio = (aposta) => {
  let num = Math.floor((Math.random() * 5) + 1);
  console.log(`Número sorteado: ${num}`);
  if (aposta === num) {
    return 'Parabéns, você ganhou';
  } else {
    return 'Tente novamente';
  }
};

console.log(sorteio(2));