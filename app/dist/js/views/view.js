export class View {
    constructor(seletor, separar) {
        const queryElement = document.querySelector(seletor);
        if (queryElement) {
            this.element = queryElement;
        }
        else {
            throw new Error(`Não foi encontrado uma tag HTML para o seletor ${seletor}`);
        }
        if (separar) {
            this.separar = separar;
        }
    }
    update(model) {
        const template = this.template(model);
        if (this.separar) {
            template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }
}
