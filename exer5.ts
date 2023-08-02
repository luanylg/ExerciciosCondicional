const entrada5 = require("readline-sync")

let n: number = parseFloat(entrada5.question("Escreva um numero "))

if(n <= 50){
    let preco: number = n * 1.05
    console.log(` R$ ${preco}`)
}

else if(n>=50 && n <=100){
    let dez: number = n * 1.10
    console.log(` R$ ${dez}`)
}
else{
    let quinze: number = n * 1.15
    console.log(` R$ ${quinze}`)
}