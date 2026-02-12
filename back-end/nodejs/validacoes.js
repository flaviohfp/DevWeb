function validarNome(nome) {

    if (typeof nome !== "string"){
        return "Nome deve ser em texto";
    }

    if (nome.trim().length < 3) {
        return "Nome deve ter pelo menos 3 letras.";
    }


    return "Nome Valido.";
    
}

function validarIdade(idade) {

    if (typeof idade !== "number"){
        return "A idade precisa ser um numero.";

    }

    if (idade <= 0) {
        return "Idade deve ser maior que zero";
    }

    return "Idade Valida";


}



module.exports = {
    validarNome,
    validarIdade
};