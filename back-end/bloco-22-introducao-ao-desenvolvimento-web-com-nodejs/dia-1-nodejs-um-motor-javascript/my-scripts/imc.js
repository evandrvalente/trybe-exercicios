const readline = require('readline-sync');
// const altura = 1.6;
// const peso = 63;

const peso = readline.questionFloat('Qual o seu peso? (em kg)');
const altura = readline.questionInt('Qual a sua altura? (em cm)');

const imc = peso/((altura/100)^2);

console.log(`IMC:  ${imc.toFixed(2)}`);

// module.exports = imcResult;

