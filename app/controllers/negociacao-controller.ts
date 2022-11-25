import { DaysOfWeek } from "../enums/days-of-week.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MessageView } from "../views/messagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes: Negociacoes = new Negociacoes();
    private view: NegociacaoView = new NegociacaoView("#negociacao");
    private messageView: MessageView = new MessageView("#mensagemView");

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.view.update(this.negociacoes);
    }

    public adicionar(): void {
        const negociacao = this.negociacaoFactory();
        if(!this.isMiddleWeekDay(negociacao.data)) {
            this.messageView.update("A data não corresponde a um dia útil!")
            return
        }
        this.negociacoes.adiciona(negociacao);
        this.updateScreen();
        this.limparFormulario();
    }

    private negociacaoFactory(): Negociacao {
        const rex = /-/g;
        const curDate = new Date(this.inputData.value.replace(rex, ","));
        const quantity = parseInt(this.inputQuantidade.value);
        const value = parseFloat(this.inputValor.value);
        return new Negociacao(curDate, quantity, value);
    }

    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

    private isMiddleWeekDay(data: Date): boolean {
        const DAYOFWEEK = data.getDay()
        return DAYOFWEEK > DaysOfWeek.SUNDAY && DAYOFWEEK < DaysOfWeek.SATURDAY
    }

    private updateScreen(): void {
        this.view.update(this.negociacoes);
        this.messageView.update("Negociação adicionada com sucesso!");
    }

}