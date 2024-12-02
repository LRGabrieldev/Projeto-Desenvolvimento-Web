function addTab(event) {
    event.preventDefault();

    const data = document.getElementById("dataInput").value;
    const descricao = document.getElementById("descricaoInput").value;
    const categoria = document.getElementById("categoriaInput").value;
    const receita = document.getElementById("receitaInput").value;
    const despesas = document.getElementById("despesasInput").value;
    const saldo = document.getElementById("saldoInput").value;

    if (data === "" || descricao === "" || categoria === "" || receita === "" || despesas === "" || saldo === "") {
        exibirMensagem("Preencha todos os campos!");
        return;
    }

    const vReceita = parseFloat(receita);
    const vDespesas = parseFloat(despesas);
    const vSaldo = parseFloat(saldo);

    if (isNaN(vReceita) || isNaN(vDespesas) || isNaN(vSaldo)) {
        exibirMensagem("Nas abas Receita, Despesas ou Saldo, digite apenas números!");
        return;
    }

    const tb = document.getElementById("tabela").getElementsByTagName("tbody")[0];

    const linha = tb.insertRow();

    const colData = linha.insertCell(0);
    const colDescricao = linha.insertCell(1);
    const colCategoria = linha.insertCell(2);
    const colReceita = linha.insertCell(3);
    const colDespesas = linha.insertCell(4);
    const colSaldo = linha.insertCell(5);

    colData.textContent = data;
    colDescricao.textContent = descricao;
    colCategoria.textContent = categoria;
    colReceita.textContent = vReceita.toFixed(2);
    colDespesas.textContent = vDespesas.toFixed(2);
    colSaldo.textContent = vSaldo.toFixed(2);

    document.getElementById("dataInput").value = "";
    document.getElementById("decricaoInput").value = "";
    document.getElementById("categoriaInput").value = "";
    document.getElementById("receitaInput").value = "";
    document.getElementById("despesasInput").value = "";
    document.getElementById("saldoInput").value = "";

    const mensagemContainer = document.getElementById("mensagem-container");
    mensagemContainer.style.display = "none";
}

function exibirMensagem(texto) {
    const mensagemContainer = document.getElementById("mensagem-container");
    const mensagemLabel = document.getElementById("mensagem");

    mensagemLabel.textContent = texto;
    mensagemContainer.style.display = "block";
}
