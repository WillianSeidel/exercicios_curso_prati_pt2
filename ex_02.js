//2. Jogo de Adivinhação - Escreva um script que gere um número aleatório de 1 a 100 e peça ao
//usuário, para adivinhar. Use while para repetir até acertar, contando
//tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')(); 

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
const chute = Number(prompt("Tentativa: "))

const diferenca = Math.abs(numeroAleatorio - chute)

while(true){
    if(diferenca === 0){
        console.log(`Numero Aleatorio: ${numeroAleatorio} e chute: ${chute}`)
        console.log("Parabéns você acertou!")
    }
}