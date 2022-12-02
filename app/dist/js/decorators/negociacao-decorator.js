export function tempoDeExeucacao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const curMethod = descriptor.value;
        const divisor = emSegundos ? 1000 : 1;
        const timeType = emSegundos ? "segundos" : "milisegundos";
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const methodReturn = curMethod.apply(this, ...args);
            const t2 = performance.now();
            console.log(`${(t2 - t1) / divisor} ${timeType} para executar o método: ${propertyKey}`);
            return methodReturn;
        };
        return descriptor;
    };
}
