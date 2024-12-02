function cadTabela() {

    const nome = document.getElementById("nome").value;
    const notaInput = document.getElementById("nota").value;

    const nota = Number(notaInput);

    if (nome === "" || nota === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (isNaN(nota)) {
        alert("Apenas numeros!");
        return;
    }

    const tb = document.getElementById("tb").getElementsByTagName("tbody")[0];

    const linha = tb.insertRow();

    const colNome = linha.insertCell(0);
    const colNota = linha.insertCell(1);

    colNome.innerHTML = nome;
    colNota.innerHTML = nota;

    document.getElementById("nome").value = "";
    document.getElementById("nota").value = "";
}