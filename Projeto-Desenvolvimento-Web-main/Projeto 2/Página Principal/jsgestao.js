function addTab(){

    const data = document.getElementById("dataInput").value;
    const descricao = document.getElementById("descricaoInput").value;
    const categoria = document.getElementById("categoriaInput").value;
    const receita = document.getElementById("receitaInput").value;
    const despesas = document.getElementById("despesasInput").value;
    const saldo = document.getElementById("saldoInput").value;

    const vReceita = Number(receita);
    const vDespesas = Number(despesas);
    const vSaldo = Number(saldo);

    if(data === "" || descricao === "" || categoria === "" || receita === "" || despesas === "" || saldo === "") {
        exibirMensagem("Preencha todos os campos!");
    }

    if(isNaN(receita) || isNaN(despesas) || isNaN(saldo)) {
        exibirMensagem("Nas abas Receita, despesas ou saldo, digite apenas números!");
    }

    const tb = document.getElementById("tabela").getElementsByTagName("tbody")[0];

    const linha = tb.insertRow();

    const colData = linha.insertCell(0);
    const colDescricao = linha.insertCell(1);
    const colCategoria = linha.insertCell(2);
    const colReceita = linha.insertCell(3);
    const colDespesas = linha.insertCell(4);
    const colSaldo = linha.insertCell(5);

    colData.innerHTML = data;
    colDescricao.innerHTML = descricao;
    colCategoria.innerHMTL = categoria;
    colReceita.innerHTML = vReceita;
    colDespesas.innerHTML = vDespesas;
    colSaldo.innerHTML = vSaldo;

    document.getElementById("data").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("receita").value = "";
    document.getElementById("despesas").value = "";
    document.getElementById("saldo").value = "";
}

function exibirMensagem(texto) {
    const mensagemContainer = document.getElementById("mensagem-container");
    const mensagemLabel = document.getElementById("mensagem");

    mensagemLabel.textContent = texto;
    mensagemContainer.style.display = "block";
}