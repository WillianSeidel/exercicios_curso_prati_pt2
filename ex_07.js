// 7. Mapeamento e Ordenação
// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

let produtos = [
    {nome: "Cadeira", preco: 25.00},
    {nome: "Mesa", preco: 75.00},
    {nome: "Luminaria", preco: 35.00}
]

produtos = produtos.sort((a, b) => {
    return a.preco - b.preco
})

produtos = produtos.map((value) => {
    return value.nome
})

console.log(produtos)