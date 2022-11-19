export class Negociacao {

    private data: Date;
    private quantidade: number;
    private valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this.data = data
        this.quantidade = quantidade
        this.valor = valor
    }

    get getData(): Date {
        return this.data;
    }

    get getQuantidade(): number {
        return this.quantidade;
    }

    get getValor(): number {
        return this.valor;
    }

    get getVolume(): number {
        return this.valor * this.quantidade;
    }

}