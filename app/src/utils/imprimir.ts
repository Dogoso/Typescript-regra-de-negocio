export function imprimir(...args: Imprimivel[]) {
    for (const imprimivel of args) {
        console.log(imprimivel.toString());
    }
}