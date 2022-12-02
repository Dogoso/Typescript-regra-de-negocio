export function escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
        const retorno = originalMethod.apply(this, args);
        console.log(`Escape na view: ${target.constructor.name} no método ${propertyKey}`)
        return retorno.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    return descriptor
}