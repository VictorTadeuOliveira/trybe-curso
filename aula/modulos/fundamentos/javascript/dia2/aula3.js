let irmao = document.createElement('section');
let pai = document.getElementById('pai');
pai.appendChild(irmao);
irmao.id = 'irmaoQueEuCriei';

let filho = document.createElement('section');
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
elementoOndeVoceEsta.appendChild(filho);
filho.id = 'filhoQueEuCriei';

let filho2 = document.createElement('section');
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
primeiroFilhoDoFilho.appendChild(filho2);
filho2.id = 'filhoQueEuCriei2';

const terceiroFilho = filho2.parentElement.parentElement.nextElementSibling;

console.log(terceiroFilho);