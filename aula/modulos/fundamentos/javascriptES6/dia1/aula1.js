const pessoaEstudante = {};
let newKey
let newValue

const addProp = (objeto, chave, propriedade) => {
  objeto[chave] = propriedade;
};

newKey = 'Nome';
newValue = 'Victor Tadeu';
addProp (pessoaEstudante, newKey, newValue);

newKey = 'Email';
newValue = 'meu@email.com';
addProp (pessoaEstudante, newKey, newValue);

newKey = 'Telefone';
newValue = '13 99133-8453';
addProp (pessoaEstudante, newKey, newValue);

newKey = 'GitHub';
newValue = 'https://github.com/VictorTadeuOliveira';
addProp (pessoaEstudante, newKey, newValue);

newKey = 'Linkedin';
newValue = 'http não tenho ainda kkkkk';
addProp (pessoaEstudante, newKey, newValue);

for (const teste in pessoaEstudante) {
  console.log(teste);
}
