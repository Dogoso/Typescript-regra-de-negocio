import { NegociacaoController } from "./controllers/negociacao-controller.js";

const negociacao = new NegociacaoController()
const form = document.querySelector(".form")
form.addEventListener("submit", (event: Event) => {
    event.preventDefault()
    negociacao.adicionar()
})
