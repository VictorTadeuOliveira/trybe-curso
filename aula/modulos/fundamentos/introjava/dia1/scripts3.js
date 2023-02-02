const nota = "75";
if (nota >=80 && nota <= 100) {
    console.log("Parabéns, você faz parte do grupo das pessoas aprovadas!");
} else if (nota >= 60 && nota < 80) {
    console.log("Você está na nossa lista de espera.");
} else if (nota >= 0 && nota < 60) {
    console.log("Infelizmente, você reprovou.”");
} else {
    console.log("Erro. Nota inválida.")
}