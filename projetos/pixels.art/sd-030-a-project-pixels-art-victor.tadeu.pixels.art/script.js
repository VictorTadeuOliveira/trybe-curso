const paleta = document.querySelector('table');
const colorList = ['black', 'yellow', 'red', 'blue'];
paleta.id = 'color-palette';

/// CORES ///

for (let index = 0; index < colorList.length; index += 1) {
  let colorAdded = colorList[index];
  colorAdded = document.createElement('td');
  colorAdded.className = 'color';
  colorAdded.style.border = 'solid black 1px';
  colorAdded.style.backgroundColor = colorList[index];
  colorAdded.style.height = '40px';
  colorAdded.style.width = '40px';
  paleta.appendChild(colorAdded);
}
paleta.firstElementChild.classList.add('selected');

/// BOTÃO E STORAGE///

const button = document.getElementById('button-random-color');
const paletaSalvar = {};

const random = () => {
  for (let index = 1; index < colorList.length; index += 1) {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    paleta.children[index].style.backgroundColor = color;
    paletaSalvar[index] = color;
  }
  localStorage.setItem('colorPalette', JSON.stringify(paletaSalvar));
};

button.addEventListener('click', random);

/// BOARD / TABLE ///

const table = document.getElementById('pixel-board');

const tableBoard = (tr, td) => {
  for (let index = 1; index <= tr; index += 1) {
    const newTr = document.createElement('tr');
    for (let index2 = 1; index2 <= td; index2 += 1) {
      const newTd = document.createElement('td');
      newTd.className = 'pixel';
      newTd.style.backgroundColor = 'white';
      newTd.style.width = '40px';
      newTd.style.height = '40px';
      newTd.style.border = 'solid black 1px';
      newTr.appendChild(newTd);
      table.appendChild(newTr);
    }
  }
};
const pixelClass = document.getElementsByClassName('pixel');

tableBoard(5, 5);

const botaoVQV = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

const gerarBoard = () => {
  let customSize = boardSize.value;
  if (!customSize) {
    alert('Board inválido!');
  } if (customSize < 5) {
    customSize = 5;
  } if (customSize > 50) {
    customSize = 50;
  }
  table.innerHTML = ' ';
  const boardValue = customSize;
  tableBoard(boardValue, boardValue);
  localStorage.removeItem('pixelBoard');
  localStorage.setItem('boardSize', boardValue);
};

botaoVQV.addEventListener('click', gerarBoard);

/// SELECIONAR COR ///

const clicado = (elemento) => {
  const paletaSelecionada = document.querySelector('.selected');
  paletaSelecionada.classList.remove('selected');
  elemento.target.classList.add('selected');
};

paleta.children[0].addEventListener('click', clicado);
paleta.children[1].addEventListener('click', clicado);
paleta.children[2].addEventListener('click', clicado);
paleta.children[3].addEventListener('click', clicado);

/// BOARD COLOR & BOARD LOCALSTORAGE ///

const colorir = (elemento) => {
  if (elemento.target.className === 'pixel') {
    const mudarCor = elemento.target;
    const corSelec = document.querySelector('.selected').style.backgroundColor;
    mudarCor.style.backgroundColor = corSelec;
  }
  const pixelArray = [];
  for (let index = 0; index < pixelClass.length; index += 1) {
    const pixelCor = pixelClass[index].style.backgroundColor;
    pixelArray.push(pixelCor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixelArray));
};

table.addEventListener('click', colorir);

/// BOTÃO LIMPAR ///

const buttonLimpar = document.getElementById('clear-board');

const limpaQuadro = () => {
  for (let index = 0; index < pixelClass.length; index += 1) {
    pixelClass[index].style.backgroundColor = 'white';
  }
  localStorage.removeItem('pixelBoard');
};

buttonLimpar.addEventListener('click', limpaQuadro);

/// LOCALSTORAGE LOAD ///

const loadPalette = () => {
  if (localStorage.getItem('colorPalette') !== null) {
    const paletaSalvas = JSON.parse(localStorage.getItem('colorPalette'));
    const paletaArray = Object.values(paletaSalvas);
    for (let index = 1; index < colorList.length; index += 1) {
      paleta.children[index].style.backgroundColor = paletaArray[index - 1];
    }
  }
};

const loadBoard = () => {
  if (localStorage.getItem('boardSize') !== null) {
    const boardLoad = localStorage.getItem('boardSize');
    table.innerHTML = ' ';
    tableBoard(boardLoad, boardLoad);
  }
  if (localStorage.getItem('pixelBoard') !== null) {
    const pixelCor = JSON.parse(localStorage.getItem('pixelBoard'));
    const pixelArray = Object.values(pixelCor);
    for (let index = 0; index < pixelClass.length; index += 1) {
      pixelClass[index].style.backgroundColor = pixelArray[index];
    }
  }
};

window.addEventListener('load', () => {
  loadPalette();
  loadBoard();
});
