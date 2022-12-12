import { domInjector } from "../decorators/domInjector.js";
import { DaysOfWeek } from "../enums/days-of-week.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoService } from "../services/negociacao-service.js";
import { MessageView } from "../views/messagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";

export class NegociacaoController {

    @domInjector("#data")
    private inputData: HTMLInputElement;
    @domInjector("#quantidade")
    private inputQuantidade: HTMLInputElement;
    @domInjector("#valor")
    private inputValor: HTMLInputElement;

    private negociacoes: Negociacoes = new Negociacoes();
    private negociacaoView: NegociacaoView = new NegociacaoView("#negociacao");
    private messageView: MessageView = new MessageView("#mensagemView");
    private negociacaoService: NegociacaoService = new NegociacaoService();

    constructor() {
        this.negociacaoView.update(this.negociacoes);
    }

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
        this.negociacoes.adicionaNegociacao(negociacao);
        this.updateScreen();
        this.limparFormulario();
    }

    public importarDados(): void {
        this.negociacaoService.obterNegociacoesDoDia()
        .then(negociacoesImported => {
            this.negociacoes.adicionaNegociacoes(negociacoesImported);
            this.negociacaoView.update(this.negociacoes);
        })
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
        this.negociacaoView.update(this.negociacoes);
        this.messageView.update("Negociação adicionada com sucesso!");
    }

}