export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        return new Date(this._data.getTime());
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    static negociacaoFactory(data, quantidade, valor) {
        const rex = /-/g;
        const curDate = new Date(data.replace(rex, ","));
        const quantity = parseInt(quantidade);
        const value = parseFloat(valor);
        return new Negociacao(curDate, quantity, value);
    }
    toString() {
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
    }
    isComparable(negociacao) {
        return negociacao.valor === this.valor
            && negociacao.quantidade === this.quantidade
            && negociacao.data.getFullYear() === this.data.getFullYear()
            && negociacao.data.getMonth() === this.data.getMonth()
            && negociacao.data.getDate() === this.data.getDate();
    }
}
