const {validarNome, validarIdade} = require("./validacoes");

console.log("-----Teste de nome----");

console.log(validarNome("Flavio"));
console.log(validarNome("Fl"));
console.log(validarNome(12));

console.log("----Teste de idade----");

console.log(validarIdade(20));
console.log(validarIdade(-34));
console.log(validarIdade("12"));
