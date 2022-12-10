export function domInjector(seletor) {
    return function (target, propertyKey) {
        const element = document.querySelector(seletor);
        function getter() {
            return element;
        }
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
