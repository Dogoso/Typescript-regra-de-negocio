var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { tempoDeExeucacao } from "../decorators/negociacao-decorator.js";
import { DaysOfWeek } from "../enums/days-of-week.js";
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
        const negociacao = Negociacao.negociacaoFactory(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.isMiddleWeekDay(negociacao.data)) {
            this.messageView.update("A data não corresponde a um dia útil!");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.updateScreen();
        this.limparFormulario();
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
        this.view.update(this.negociacoes);
        this.messageView.update("Negociação adicionada com sucesso!");
    }
}
__decorate([
    tempoDeExeucacao()
], NegociacaoController.prototype, "adicionar", null);
