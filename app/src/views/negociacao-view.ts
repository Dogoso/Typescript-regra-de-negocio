import { escape } from "../decorators/escape.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacaoView extends View<Negociacoes> {

    private data_formatter: Intl.DateTimeFormat = new Intl.DateTimeFormat();

    @escape
    protected template(models: Negociacoes): string {
        const negociacoes = models.listar();
        return `
            <table>
                <thead>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </thead>
                <tbody>
                    ${negociacoes.map(data => `
                        <tr> 
                            <td>${this.formatDate(data.data)}</td>
                            <td>${data.quantidade}</td>
                            <td>${data.valor}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `
    }

    private formatDate(data: Date): string {
        return this.data_formatter.format(data)
    }

}