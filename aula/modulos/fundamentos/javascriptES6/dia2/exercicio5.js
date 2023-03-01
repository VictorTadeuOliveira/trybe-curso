function hydrate(bebeu) {
  let beberArray = bebeu.match(/[0-9]+/g);
  let beberCopos = 0;
  for (index = 0; index < beberArray.length; index += 1) {
    beberCopos += +beberArray[index];
  }
  if (beberCopos === 1) {
    return `${beberCopos} copo de água`;
  }
  return `${beberCopos} copos de água`;
}

module.exports = hydrate;