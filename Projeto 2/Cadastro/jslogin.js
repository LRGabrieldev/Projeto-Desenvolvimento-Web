function cadastrarUsuario (email, senha) {
    const usuario = {
        email: email.trim(),
        senha: senha.trim()
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    console.log("Usuario cadastrado: ", usuario);
}

function validarLogin(email, senha) {
   
    const usuarioArmazenado = JSON.parse(localStorage.getItem("usuario"));

    if(!usuarioArmazenado) {
        alert("Nenhum usuario cadastrado!");
        return;
    }

    const usuario = JSON.parse(usuarioArmazenado);

    if (email.trim() === usuarioArmazenado.email && senha.trim() === usuarioArmazenado.senha) {
        alert("Login realizado com sucesso!");
    } else {
        alert("Email ou senha incorretos!");    
    }
}

document.getElementById("botao-enviar").addEventListener("click", function(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

        validarLogin(email, senha);
});

cadastrarUsuario("teste@gmail.com", "1234");