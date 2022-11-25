export abstract class View<T> {

    private element: HTMLElement;

    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        const template = this.template(model);
        this.element.innerHTML = template;
    }

}