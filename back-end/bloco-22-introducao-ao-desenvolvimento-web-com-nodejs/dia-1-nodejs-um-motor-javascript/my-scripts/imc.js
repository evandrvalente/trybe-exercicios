const altura = 1.6; 
const peso = 63;
const imc = (height, weight) => console.log(`Imc: ${weight/(height^2)}`);

const imcResult = console.log(imc(altura,peso));

module.exports = imcResult;

