let student = {}

function addInfo (object, key, value) {
  object[key] = value;
}

let newKey = 'nome';
let newValue = 'Victor Tadeu';
addInfo (student, newKey, newValue);

newKey = 'eMail';
newValue = 'meu.email@email.com';
addInfo (student, newKey, newValue);

newKey = 'telefone';
newValue = '13 99133-8453';
addInfo (student, newKey, newValue);

newKey = 'gitHub';
newValue = 'link do meu GitHub';
addInfo (student, newKey, newValue);

newKey = 'linkedIn';
newValue = 'link do meu LinkedIn';
addInfo (student, newKey, newValue);

for (keys in student) {
  console.log(keys, student[keys]);
};
