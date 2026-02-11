let nivel = process.argv[2];


console.log("===== Nivel do personagem =====");


console.log("Nivel:", nivel);

if (nivel >= 1 || nivel <= 10) {
    console.log("Iniciante");
} else if (nivel >= 10 || nivel <= 30) {
    console.log("Intermediario");
} else {
    console.log("Veterano");
}
    