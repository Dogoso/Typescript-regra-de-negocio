import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {

    public obterNegociacoesDoDia(): Promise<Array<Negociacao>> {
        return fetch("http://localhost:8080/dados")
            .then(resp => resp.json())
            .then((negociacoes: Array<NegociacaoDoDia>) => {
                return negociacoes.map((negociacao: NegociacaoDoDia) => {
                    return new Negociacao(
                        new Date(), 
                        negociacao.vezes, 
                        negociacao.montante
                    );
                })
            })
    }

}