import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    private negociacoes: Negociacao[] = []

    public adicionaNegociacao(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao)
    }

    public adicionaNegociacoes(newNegociacoes: Negociacao[]): void {
        newNegociacoes.forEach((negociacao: Negociacao) => {
            this.negociacoes.push(negociacao);
        })
    }

    public listar(): readonly Negociacao[] {
        return this.negociacoes
    }

}