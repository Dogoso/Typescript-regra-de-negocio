import { NegociacaoController } from "./controllers/negociacao-controller.js";
const negociacao = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        negociacao.adicionar();
    });
}
else {
    throw new Error("Não foi possível inicializar a aplicação, você tem certeza que algum formulário foi criado?");
}
const buttonImportar = document.querySelector("#importar");
if (buttonImportar) {
    buttonImportar.addEventListener("click", () => {
        negociacao.importarDados();
    });
}
else {
    throw new Error("Botão de importação de dados não inicializado, ID provavelmente incorreto.");
}
