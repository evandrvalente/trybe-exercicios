let nota = 9.4;
let result = nota * 10;

if (result < 0 || result > 100){
    console.log("Nota inválida, informar um valor entre 0 e 10.");
} else if (result >= 90 && result <=100){
    console.log("A");
}else if (result >= 80 && result <90){
    console.log("B");
} else if (result >= 70 && result <80){
    console.log("C");
} else if (result >= 60 && result <70){
    console.log("D");
} else if (result >= 50 && result <60){
    console.log("E");
} else if (result < 50){
    console.log("F");
}