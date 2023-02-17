//Usei um identificador de RGB para achar as cores e usei em HEX, site https://imagecolorpicker.com/en

document.getElementById('header-container').style.backgroundColor =  '#00b069';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#ff9f84';

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#f9db5e';

for (index = 0; index < document.querySelectorAll('.emergency-tasks h3').length; index += 1) {
  document.querySelectorAll('.emergency-tasks h3')[index].style.backgroundColor = '#a500f3';
}

for (index = 0; index < document.querySelectorAll('.no-emergency-tasks h3').length; index += 1) {
  document.querySelectorAll('.no-emergency-tasks h3')[index].style.backgroundColor = '#232525';
}

document.getElementById('footer-container').style.backgroundColor = '#003533';
