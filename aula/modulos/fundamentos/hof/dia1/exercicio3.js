const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corretor = (gabarito, respostas) => {
  if (respostas === gabarito) {
    return 1;
  } if (respostas === 'N.A') {
    return 0;
  }
  return -0.5;
};

const resultado = (gabarito, respostas, correcao) => {
  let nota = 0;
  for (index = 0; index < gabarito.length; index += 1) {
    const resultado = correcao(gabarito[index], respostas[index]);
    nota += resultado;
  }
  return `Nota final: ${nota}`;
};

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, corretor));