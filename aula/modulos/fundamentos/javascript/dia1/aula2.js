let paragrafos = document.getElementsByTagName("p");

for (index = 0; index < paragrafos.length; index += 1) {
  paragrafos[index].className += "paragrafos";
}

document.getElementsByClassName("paragrafos")[0].style.color = "blue";

document.getElementsByTagName("h4")[0].style.color = "green";