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

    if(data === "" || descricao === "" || categoria === "" || receita === "" || despesas === "")
}