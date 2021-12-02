let num1 = 40;
let num2 = 110;
let num3 = 30;
let somaAngulo;
let result = false;

if (num1 <= 0 || num2 <= 0  || num3 <= 0) {
    console.log ("Ângulo inválido, favor informar valores maiores do que zero para cada ângulo");
} else {
    somaAngulo = num1 + num2 + num3;
    if (somaAngulo == 180) {
        result = true;
    } else {
        result = false;
    }
    console.log (result);
} 

