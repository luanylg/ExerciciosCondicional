var entrada1 = require("readline-sync");
var numero = parseFloat(entrada1.question("Digite um numero : "));
if (numero > 0) {
    console.log(" Positivo");
}
else if (numero < 0)
    console.log("Negativo");
else
    console.log("É Zero!");
