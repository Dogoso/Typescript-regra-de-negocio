var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/domInjector.js";
import { DaysOfWeek } from "../enums/days-of-week.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacaoService } from "../services/negociacao-service.js";
import { MessageView } from "../views/messagem-view.js";
import { NegociacaoView } from "../views/negociacao-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacaoView("#negociacao");
        this.messageView = new MessageView("#mensagemView");
        this.negociacaoService = new NegociacaoService();
        this.negociacaoView.update(this.negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.negociacaoFactory(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isMiddleWeekDay(negociacao.data)) {
            this.messageView.update("A data não corresponde a um dia útil!");
            return;
        }
        this.negociacoes.adicionaNegociacao(negociacao);
        this.updateScreen();
        this.limparFormulario();
    }
    importarDados() {
        this.negociacaoService.obterNegociacoesDoDia()
            .then(negociacoesImported => {
            this.negociacoes.adicionaNegociacoes(negociacoesImported);
            this.negociacaoView.update(this.negociacoes);
        });
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    isMiddleWeekDay(data) {
        const DAYOFWEEK = data.getDay();
        return DAYOFWEEK > DaysOfWeek.SUNDAY && DAYOFWEEK < DaysOfWeek.SATURDAY;
    }
    updateScreen() {
        this.negociacaoView.update(this.negociacoes);
        this.messageView.update("Negociação adicionada com sucesso!");
    }
}
__decorate([
    domInjector("#data")
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector("#quantidade")
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "inputValor", void 0);
