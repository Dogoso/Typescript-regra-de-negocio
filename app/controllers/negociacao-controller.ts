import { Negociacao } from "../models/negociacao";

export class NegociacaoController {

    private inputData: Element;
    private inputQuantidade: Element;
    private inputValor: Element;

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adicionar() {
        const negociacao = new Negociacao(
            new Date(this.inputData.value),
            Number(this.inputQuantidade.value),
            Number(this.inputValor.value),
        )
        console.log(negociacao)
    }

}