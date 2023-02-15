let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (keys in names) {
  console.log('Olá, ' + names[keys]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (keys in car) {
  console.log(keys + ' ' + car[keys]);
}
