//1. Validação de Datas -Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

const prompt = require('prompt-sync')();

function ehDataValida(dia, mes, ano) {
    
    const data = new Date(ano, mes - 1, dia);

      return (
        data.getFullYear() === ano &&
        data.getMonth() === mes - 1 && 
        data.getDate() === dia
    );
}

let dia;
do {
    dia = Number(prompt("Digite o dia (1-31): "));
    if (isNaN(dia) || dia < 1 || dia > 31) {
        console.log("Dia inválido. Por favor, insira um número entre 1 e 31.");
    }
} while (isNaN(dia) || dia < 1 || dia > 31);

let mes;
do {
    mes = Number(prompt("Digite o mês (1-12): "));
    if (isNaN(mes) || mes < 1 || mes > 12) {
        console.log("Mês inválido. Por favor, insira um número entre 1 e 12.");
    }
} while (isNaN(mes) || mes < 1 || mes > 12);


let ano;
do {
    ano = Number(prompt("Digite o ano (ex: 1900-2100): "));
    
    if (isNaN(ano) || ano < 1000 || ano > 3000) { 
        console.log("Ano inválido. Por favor, insira um ano numérico razoável.");
    }
} while (isNaN(ano) || ano < 1000 || ano > 3000);

if (ehDataValida(dia, mes, ano)) {
    console.log(`\n${dia}/${mes}/${ano} é uma data VALIDA.`);
} else {
    console.log(`\n${dia}/${mes}/${ano} é uma data INVALIDA.`);
}