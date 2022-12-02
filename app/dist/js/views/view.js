export class View {
    constructor(seletor) {
        const queryElement = document.querySelector(seletor);
        if (queryElement) {
            this.element = queryElement;
        }
        else {
            throw new Error(`Não foi encontrado uma tag HTML para o seletor ${seletor}`);
        }
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
