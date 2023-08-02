var input1 = require("readline-sync");
var v = parseFloat(input1.question("Digite um numero: "));
if (v > 80) {
    var multa = (v - 80) * 7;
    console.log('Você foi multado em R$' + multa);
}
