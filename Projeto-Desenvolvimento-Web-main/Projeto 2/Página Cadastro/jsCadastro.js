document.getElementById("form-cadastro").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-cadastro").value;
    const senha = document.getElementById("senha-cadastro").value;

    const usuario = {
        email: email,
        senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    exibirMensagem("Cadastro realizado com sucesso!");
    
});

function exibirMensagem(texto) {
    const mensagemContainer = document.getElementById("mensagem-container");
    const mensagemLabel = document.getElementById("mensagem");

    mensagemLabel.textContent = texto;
    mensagemContainer.style.display = "block";

    setTimeout(() => {
        window.location.href = "http://127.0.0.1:5500/Projeto%202/P%C3%A1gina%20Login/login.html";
    }, 3000);
}
