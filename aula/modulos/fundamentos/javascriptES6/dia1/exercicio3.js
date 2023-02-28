const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (destino, turno, horário) => {
  destino[turno] = horário;
};
addTurno (lesson2, 'turno', 'noite');

const listaKeys = (objeto) => {
  return Object.keys(objeto);
};

const tamanhoObj = (objeto) => {
  return Object.keys(objeto).length;
};

const listaValues = (objeto) => {
  return Object.values(objeto);
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const todosEstudantes = (objeto) => {
  let totalEstudantes = 0;
  const aulas = Object.keys(objeto);
  for (index in aulas) {
    totalEstudantes += objeto[aulas[index]].numeroEstudantes;
    /// as keys do objeto não são um array para serem acessadas por [],logo a const 'aula' criou esse array
  }
  return totalEstudantes;
};

const posicaoChave = (objeto, chave) => {
  const objChave = Object.values(objeto);
  return objChave[chave];
}

const verifyPair = (obj, key, value) => {
  const objOrig = Object.entries(obj);
  const igual = false;
  for (let index in objOrig) {
    if (objOrig[index][0] === key && objOrig[index][1] === value) igual = true;
  }
  return igual;
};

console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
