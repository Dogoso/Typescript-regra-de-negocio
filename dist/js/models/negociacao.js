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
}
