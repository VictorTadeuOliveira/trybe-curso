const techList = (techs, names) => {
  try {
    techNull(techs);
    return techFunction(techs, names);
  } catch(erro) {
    return erro.message;
  }
};

const techNull = (techs) => {
  if (techs.length === 0) {
    throw new Error('Vazio!')
  }
}

const techFunction = (techs, names) => {
  techs.sort();
  let listaFinal = {};
  for (let index = 0; index < techs.length; index += 1) {
    const lista = {};
    lista.tech = techs[index];
    lista.name = names;
    listaFinal[index] = Object.assign({}, lista);
  }
  return Object.values(listaFinal);
};

const teste = ['d1', 'c1', 'a1', 'b1'];
console.log(techList(teste, 'João'));

module.exports = techList;
