export function domInjector(seletor: string) {
    return function(
        target: any,
        propertyKey: string
    ) {
        const element: HTMLElement = document.querySelector(seletor);
        function getter(): HTMLElement {
            return element;
        }
        Object.defineProperty(target, propertyKey, { get: getter });
    }
}