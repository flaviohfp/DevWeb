const tabela = document.getElementById("minhaTabela");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnRemover = document.getElementById("btnRemover");

let idadeAtual = 15;

// Adicionar
btnAdicionar.addEventListener("click", function () {
    const novaLinha = tabela.insertRow();

    novaLinha.innerHTML = `
        <td>Usuário</td>
        <td>${idadeAtual}</td>
    `;

    idadeAtual++;
});

// Remover Última Linha
btnRemover.addEventListener("click", function () {
    if (tabela.rows.length > 1) {


        tabela.deleteRow(tabela.rows.length - 1);
        idadeAtual--;
    }
});
