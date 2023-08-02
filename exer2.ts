const input = require("readline-sync");

let numero_1: number = parseFloat(entrada1.question("Digite um numero: "));
let numero_2: number = parseFloat(entrada1.question("Digite um numero: "));

if (numero_1 > numero_2)
    console.log("O primeiro numero é o maior");
else
    console.log("O numero segundo é o maior");