var entrada5 = require("readline-sync");
var n = parseFloat(entrada5.question("Escreva um numero "));
if (n <= 50) {
    var preco = n * 1.05;
    console.log(" R$ ".concat(preco));
}
else if (n >= 50 && n <= 100) {
    var dez = n * 1.10;
    console.log(" R$ ".concat(dez));
}
else {
    var quinze = n * 1.15;
    console.log(" R$ ".concat(quinze));
}
