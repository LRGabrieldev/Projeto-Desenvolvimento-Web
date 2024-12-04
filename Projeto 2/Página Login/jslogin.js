document.getElementById("form-login").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-login").value;
    const senha = document.getElementById("senha-login").value;

    const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioSalvo && email === usuarioSalvo.email && senha === usuarioSalvo.senha) {
        window.location.href = "http://127.0.0.1:5500/Projeto%202/P%C3%A1gina%20Principal/gestao.html"; 
    } else {
        exibirMensagem("Email ou senha incorretos!");
    }
});

function exibirMensagem(texto) {
    const mensagemContainer = document.getElementById("mensagem-container");
    const mensagemLabel = document.getElementById("mensagem");

    mensagemLabel.textContent = texto;
    mensagemContainer.style.display = "block";
}
