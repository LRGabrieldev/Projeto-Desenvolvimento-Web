function carregarAgenda() {
    
    const usuarioLogado = JSON.parse(localStorage.getItem("usuario"));

    if(!usuarioLogado) {
        exibirMensagem("Você precisa fazer login primeiro!");
        window.location.href = "http://127.0.0.1:5500/Projeto%202/P%C3%A1gina%20Login/login.html";
        return;
    }

    

    const tb = document.getElementById("tabela").getElementsByTagName("tbody")[0];

    tabela.innerHTML = "";

    usuarioLogado.agenda.forEach(item => {
        const linha = tb.insertRow();

        linha.insertCell(0).innerText = item.data;
        linha.insertCell(1).innerText = item.descricao;
        linha.insertCell(2).innerText = item.categoria;
        linha.insertCell(3).innerText = item.receita;
        linha.insertCell(4).innerText = item.despesas;
        linha.insertCell(5).innerText = item.saldo;

    });
}

function addTab(event) {
    event.preventDefault();

    const data = document.getElementById("dataInput").value;
    const descricao = document.getElementById("descricaoInput").value;
    const categoria = document.getElementById("categoriaInput").value;
    const receita = parseFloat(document.getElementById("receitaInput").value);
    const despesas = parseFloat(document.getElementById("despesasInput").value);

    const saldo = despesas - receita;

    if (data === "" || descricao === "" || categoria === "" || receita === "" || despesas === "") {
        exibirMensagem("Preencha todos os campos!");
        return;
    }


    if (isNaN(receita) || isNaN(despesas)) {
        exibirMensagem("Nas abas Receita, Despesas ou Saldo, digite apenas números!");
        return;
    }

    const mensagemContainer = document.getElementById("mensagem-container");
    mensagemContainer.style.display = "none"
}

function exibirMensagem(texto) {
    const mensagemContainer = document.getElementById("mensagem-container");
    const mensagemLabel = document.getElementById("mensagem");

    mensagemLabel.textContent = texto;
    mensagemContainer.style.display = "block";
}


