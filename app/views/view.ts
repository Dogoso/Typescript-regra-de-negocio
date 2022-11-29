export abstract class View<T> {

    private element: HTMLElement;
    private separar: boolean;

    constructor(seletor: string, separar?: boolean) {
        const queryElement = document.querySelector(seletor);
        if(queryElement) {
            this.element = queryElement as HTMLElement
        }else {
            throw new Error(`Não foi encontrado uma tag HTML para o seletor ${seletor}`)
        }
        if(separar) {
            this.separar = separar
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        const template = this.template(model);
        if(this.separar) {
            template.replace(/<script>[\s\S]*?<\/script>/, "")
        }
        this.element.innerHTML = template;
    }

}