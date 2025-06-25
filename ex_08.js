// 8. Agrupamento por Propriedade Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.
function agruparVendas(vendas) {
    return vendas.reduce((acc, venda) => {
        acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
        return acc;
    }, {});
}

const vendas = [{ cliente: "Willian", total: 500 }, { cliente: "Roberto", total: 90 }, { cliente: "Ana", total: 100 }];
console.log(agruparVendas(vendas));