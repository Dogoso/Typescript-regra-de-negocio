import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adicionar(): void {
        const negociacao = this.negociacaoFactory();
        this.negociacoes.adiciona(negociacao)
        this.limparFormulario();
    }

    negociacaoFactory(): Negociacao {
        const rex = /-/g;
        const curDate = new Date(this.inputData.value.replace(rex, ","));
        const quantity = parseInt(this.inputQuantidade.value);
        const value = parseFloat(this.inputValor.value);
        return new Negociacao(curDate, quantity, value);
    }

    limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

}