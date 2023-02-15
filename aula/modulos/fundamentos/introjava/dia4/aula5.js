let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

function nameHab (student) {
  let habilidades = Object.keys(student);
  for (let keys in habilidades) {
    console.log(habilidades[keys] + ', Nível: ' + student[habilidades[keys]]);
  }
};

console.log('Estudante 1');
nameHab(student1);

console.log('');

console.log('Estudante 2');
nameHab(student2);
