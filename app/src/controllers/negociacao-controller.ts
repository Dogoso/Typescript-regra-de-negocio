import { tempoDeExeucacao } from "../decorators/negociacao-decorator.js";
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
        this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        this.view.update(this.negociacoes);
    }

    @tempoDeExeucacao()
    public adicionar(): void {
        const negociacao = Negociacao.negociacaoFactory(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if(!this.isMiddleWeekDay(negociacao.data)) {
            this.messageView.update("A data não corresponde a um dia útil!")
            return
        }
        this.negociacoes.adiciona(negociacao);
        this.updateScreen();
        this.limparFormulario();
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