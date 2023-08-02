var valor = require("readline-sync");
var nota = parseFloat(valor.question("Digite sua nota: "));
var falta = parseFloat(valor.question("Digite suas faltas: "));
if (nota < 3.9 && falta <= 20) {
    console.log("Voc\u00EA tem nota E em conceito");
}
else if (nota < 4.9 && falta <= 20) {
    console.log("Voc\u00EA tem nota D em conceito");
}
else if (nota < 7.4 && falta <= 20) {
    console.log("Voc\u00EA tem nota C em conceito");
}
else if (nota < 8.9 && falta <= 20) {
    console.log("Voc\u00EA tem nota B em conceito");
}
else if (nota < 10 && falta <= 20) {
    console.log("Voc\u00EA tem nota A em conceito");
}
else if (nota < 3.9 && falta > 20) {
    console.log("Voc\u00EA tem nota E em conceito");
}
else if (nota < 4.9 && falta > 20) {
    console.log("Voc\u00EA tem nota E em conceito");
}
else if (nota < 7.4 && falta > 20) {
    console.log("Voc\u00EA tem nota D em conceito");
}
else if (nota < 8.9 && falta > 20) {
    console.log("Voc\u00EA tem nota C em conceito");
}
else if (nota < 10 && falta > 20) {
    console.log("Voc\u00EA tem nota B em conceito");
}
