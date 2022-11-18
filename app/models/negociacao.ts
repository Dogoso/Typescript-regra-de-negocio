export class Negociacao {

    private data: Date;
    private quantidade: number;
    private valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this.data = data
        this.quantidade = quantidade
        this.valor = valor
    }

    get getData() {
        return this.data;
    }

    get getQuantidade() {
        return this.quantidade;
    }

    get getValor() {
        return this.valor;
    }

    get getVolume() {
        return this.valor * this.quantidade;
    }

}