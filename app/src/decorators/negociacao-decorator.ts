export function tempoDeExeucacao() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        const curMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            const t1 = performance.now();
            const methodReturn = curMethod.apply(this, ...args);
            const t2 = performance.now();
            console.log(`${(t2 - t1) / 1000} segundos para executar o método: ${propertyKey}`)
            return methodReturn
        }

    }
}