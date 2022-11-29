export class View {
    constructor(seletor, separar) {
        this.element = document.querySelector(seletor);
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
