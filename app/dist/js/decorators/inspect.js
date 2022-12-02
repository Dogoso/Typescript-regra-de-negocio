export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`-- Método ${propertyKey}`);
        console.log(`--- Construtor: ${target.constructor.name}`);
        const retorno = originalMethod.apply(this, args);
        console.log(`---- Retorno: ${retorno}`);
        return retorno;
    };
    return descriptor;
}
