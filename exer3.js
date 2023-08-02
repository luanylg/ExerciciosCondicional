var dados = require("readline-sync");
var ano = parseInt(dados.question("Digite o ano: "));
if (ano % 4 != 0 && ano % 100 != 0 && ano % 400 != 0)
    console.log("Não é bissexto!");
else
    (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0);
console.log("É bissexto");
