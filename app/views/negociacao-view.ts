import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoView {

    private target: HTMLElement;
    private data_formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat();

    constructor(seletor: string) {
        this.target = document.querySelector(seletor);
    }

    template(models: readonly Negociacao[]): string {
        return `
            <table>
                <thead>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </thead>
                <tbody>
                    ${models.map(data => `
                        <tr> 
                            <td>${this.data_formatter.format(data.data)}</td>
                            <td>${data.quantidade}</td>
                            <td>${data.valor}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `
    }

    atualizar(model: Negociacoes): void {
        this.target.innerHTML = this.template(model.listar())
    }

}