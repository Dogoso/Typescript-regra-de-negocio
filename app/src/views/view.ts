export abstract class View<T> {

    private element: HTMLElement;

    constructor(seletor: string) {
        const queryElement = document.querySelector(seletor);
        if(queryElement) {
            this.element = queryElement as HTMLElement
        }else {
            throw new Error(`Não foi encontrado uma tag HTML para o seletor ${seletor}`)
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }

}