export class NegociacaoView {
    constructor(seletor) {
        this.data_formatter = new Intl.DateTimeFormat();
        this.target = document.querySelector(seletor);
    }
    template(models) {
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
        `;
    }
    atualizar(model) {
        this.target.innerHTML = this.template(model.listar());
    }
}
