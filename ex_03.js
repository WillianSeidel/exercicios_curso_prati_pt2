// 3. Palavras Únicas - Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.


const texto = "olá olá mundo mundo";
const palavrasUnicas = extrairPalavrasUnicas(texto);


function extrairPalavrasUnicas(str) {
  const palavras = str.split(' ');
  const palavrasUnicas = [];
  
  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    
    
    if (palavrasUnicas.indexOf(palavra) === -1) {
      palavrasUnicas.push(palavra);
    }
  }
  
  return palavrasUnicas;
}

console.log(palavrasUnicas);