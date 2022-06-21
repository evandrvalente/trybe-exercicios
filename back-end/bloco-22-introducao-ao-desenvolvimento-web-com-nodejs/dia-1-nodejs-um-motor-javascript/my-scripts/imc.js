const readline = require('readline-sync');
// const altura = 1.6;
// const peso = 63;

const peso = readline.questionInt('Qual o seu peso? (em kg)');
const altura = readline.questionInt('Qual a sua altura? (em cm)');

const imc = (height, weight) => console.log(`Imc: ${weight/((height/100)^2)}`);

const imcResult = console.log((imc(altura,peso)).toFixed(2));

// module.exports = imcResult;

