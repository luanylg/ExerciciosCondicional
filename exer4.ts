const input1 = require("readline-sync");

let v: number = parseFloat(input1.question("Digite um numero: "));

if(v > 80){
    let multa: number =  (v - 80) * 7
    console.log('Você foi multado em R$' + multa);
}