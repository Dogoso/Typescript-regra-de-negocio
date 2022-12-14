export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionaNegociacao(negociacao) {
        this.negociacoes.push(negociacao);
    }
    adicionaNegociacoes(newNegociacoes) {
        newNegociacoes.forEach((negociacao) => {
            this.negociacoes.push(negociacao);
        });
    }
    listar() {
        return this.negociacoes;
    }
    toString() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
