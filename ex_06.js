// 6. Memoization - Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const chave = JSON.stringify(args);

        if (chave in cache) { 
            console.log("Resultado da memória");
            return cache[chave];
        }

        const resultado = fn(...args);
        cache[chave] = resultado;
        console.log("Novo resultado memorizado!");
        return resultado;
    };
}

function soma(a, b) {
    return a + b;
}

const somaMemorizada = memoize(soma);

console.log(somaMemorizada(8, 6));
console.log(somaMemorizada(9, 5)); 
console.log(somaMemorizada(8, 6)); 