export function domInjector(seletor) {
    return function (target, propertyKey) {
        function getter() {
            const element = document.querySelector(seletor);
            return element;
        }
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
