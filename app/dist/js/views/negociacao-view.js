import { View } from "./view.js";
export class NegociacaoView extends View {
    constructor() {
        super(...arguments);
        this.data_formatter = new Intl.DateTimeFormat();
    }
    template(models) {
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
        `;
    }
    formatDate(data) {
        return this.data_formatter.format(data);
    }
}
