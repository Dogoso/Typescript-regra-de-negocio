import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/messagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.view = new NegociacaoView("#negociacao");
        this.messageView = new MessageView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.view.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = this.negociacaoFactory();
        this.negociacoes.adiciona(negociacao);
        this.view.update(this.negociacoes);
        this.messageView.update("Negociação adicionada com sucesso!");
        this.limparFormulario();
    }
    negociacaoFactory() {
        const rex = /-/g;
        const curDate = new Date(this.inputData.value.replace(rex, ","));
        const quantity = parseInt(this.inputQuantidade.value);
        const value = parseFloat(this.inputValor.value);
        return new Negociacao(curDate, quantity, value);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
