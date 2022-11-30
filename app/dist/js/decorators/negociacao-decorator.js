export function tempoDeExeucacao() {
    return function (target, propertyKey, descriptor) {
        const curMethod = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const methodReturn = curMethod.apply(this, ...args);
            const t2 = performance.now();
            console.log(`${(t2 - t1) / 1000} segundos para executar o método: ${propertyKey}`);
            return methodReturn;
        };
    };
}
