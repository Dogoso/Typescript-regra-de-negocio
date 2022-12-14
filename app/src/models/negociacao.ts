import { Model } from "../interfaces/model";

export class Negociacao implements Model<Negociacao> {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number,
    ) {}

    public get data(): Date {
        return new Date(this._data.getTime());
    }

    public get volume(): number {
        return this.valor * this.quantidade;
    }

    public static negociacaoFactory(data: string, quantidade: string, valor: string): Negociacao {
        const rex = /-/g;
        const curDate = new Date(data.replace(rex, ","));
        const quantity = parseInt(quantidade);
        const value = parseFloat(valor);
        return new Negociacao(curDate, quantity, value);
    }

    public toString(): string {
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
    }

    public isComparable(negociacao: Negociacao): boolean {
        return negociacao.valor === this.valor 
            && negociacao.quantidade === this.quantidade
            && negociacao.data.getFullYear() === this.data.getFullYear()
            && negociacao.data.getMonth() === this.data.getMonth()
            && negociacao.data.getDate() === this.data.getDate();
    }

}