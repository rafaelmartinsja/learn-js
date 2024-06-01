/* 

**Descrição:** Ajudar Pedrinho a descobrir sua média do semestre.

**Instruções:** Criar variáveis com as notas da unidade 1, 2, 3.
Calcular e exibir a média de Pedro

*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const Nome = `Pedro`;

function perguntarNota(pergunta) {
  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(parseFloat(resposta));
    });
  });
}

async function main() {

try {
   
let Nota1 =  await perguntarNota(`Digite a Nota 1:`);
let Nota2 =  await perguntarNota(`Digite a Nota 2:`);
let Nota3 =  await perguntarNota(`Digite a Nota 3:`);

const Media = (Nota1 + Nota2 + Nota3) / 3;

console.log(`A média de ${Nome} é ${Media.toFixed(2)}`);
} catch (error) {
console.error('Erro ao calcular a média:', error);
} finally {
rl.close();
}

}

main();