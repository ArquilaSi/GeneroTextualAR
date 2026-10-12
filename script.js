const botao = document.getElementById("iniciar");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function () {
    mensagem.textContent =
        "A próxima etapa é ativar a câmera e reconhecer os cartões cadastrados.";
});