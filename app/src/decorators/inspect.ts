export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`-- Método ${propertyKey}`)
        console.log(`--- Construtor: ${target.constructor.name}`)
        const retorno = originalMethod.apply(this, args);
        console.log(`---- Retorno: ${retorno}`)
        return retorno
    }
    return descriptor
}