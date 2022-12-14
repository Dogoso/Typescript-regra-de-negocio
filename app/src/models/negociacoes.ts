import { Model } from "../interfaces/model.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Model<Negociacoes> {
    
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

    public toString(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    
    public isComparable(negociacoes: Negociacoes): boolean {
        return JSON.stringify(negociacoes) === JSON.stringify(this.negociacoes);
    }

}