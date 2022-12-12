import { Negociacao } from "../models/negociacao.js";
export class NegociacaoService {
    obterNegociacoesDoDia() {
        return fetch("http://localhost:8080/dados")
            .then(resp => resp.json())
            .then((negociacoes) => {
            return negociacoes.map((negociacao) => {
                return new Negociacao(new Date(), negociacao.vezes, negociacao.montante);
            });
        });
    }
}
