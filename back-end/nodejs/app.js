// app.js

const operacoes = require('./operacoes');

const num1 = 10;
const num2 = 5;

console.log("Soma:", operacoes.somar(num1, num2));
console.log("Subtração:", operacoes.subtrair(num1, num2));
console.log("Multiplicação:", operacoes.multiplicar(num1, num2));

try {
    console.log("Divisão:", operacoes.dividir(num1, num2));
} catch (erro) {
    console.log("Erro:", erro.message);
}
