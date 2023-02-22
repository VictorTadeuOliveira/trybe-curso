let h1JS = document.createElement('h1');
h1JS.innerText = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(h1JS);

let mainJS = document.createElement('main');
mainJS.className = 'main-content';
document.body.appendChild(mainJS);

let centerSection = document.createElement('section');
centerSection.className = "center-content";
mainJS.appendChild(centerSection);

let p1 = document.createElement('p');
p1.innerText = 'Texto do primeiro parágrafo';
centerSection.appendChild(p1);

let leftSection = document.createElement('section');
leftSection.className = "left-content";
mainJS.appendChild(leftSection);

let rightSection = document.createElement('section');
rightSection.className = "right-content";
mainJS.appendChild(rightSection);

let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
leftSection.appendChild(img);

let lista = document.createElement('ul');
rightSection.appendChild(lista);

let listaItems = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (index = 0; index < listaItems.length; index += 1) {
  let item = listaItems[index];
  let listaHTML = document.createElement('li');
  listaHTML.innerText = item + ' ';
  lista.appendChild(listaHTML);
}

for (index = 1; index <= 3; index += 1) {
  let h3JS = document.createElement('h3');
  mainJS.appendChild(h3JS);
}

///////////////////////////////////////////////

h1JS.className = 'title';

let mainH3 = mainJS.getElementsByTagName('h3');
for (index = 0; index < mainH3.length; index += 1) {
  mainH3[index].className = 'description';
}

mainJS.removeChild(leftSection);

rightSection.style.marginRight = 'auto';

centerSection.parentElement.style.backgroundColor = 'green';

lista.lastChild.remove();
lista.removeChild(lista.lastElementChild);
