export class Negociacao implements Imprimivel {

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

}