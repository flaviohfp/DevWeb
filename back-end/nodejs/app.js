const operacoes = require("./utils/operacoes");
const validacoes = require("./utils/validacoes");


const numero1 = 10;
const numero2 = 5;


if (!validacoes.ehNumero(numero1) || !validacoes.ehNumero(numero2)) {
    console.log("Erro: valores inválidos.");
} else {

    console.log("=== CALCULADORA ===");
    console.log("Número 1:", numero1);
    console.log("Número 2:", numero2);
    console.log("-------------------");

    console.log("Soma:", operacoes.somar(numero1, numero2));
    console.log("Subtração:", operacoes.subtrair(numero1, numero2));
    console.log("Multiplicação:", operacoes.multiplicar(numero1, numero2));
    console.log("Divisão:", operacoes.dividir(numero1, numero2));
}
