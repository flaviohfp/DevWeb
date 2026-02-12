const mensagens = require("./mensagens");

const nomeUsuario = "Flavio";

console.log(mensagens.boasVindas(nomeUsuario));

console.log(mensagens.despedida(nomeUsuario));

console.log("Sistema criado por", mensagens.autorSistema);