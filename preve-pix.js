const prompt = require("prompt-sync")();

let saldo = 150
let valor = Number(prompt("quanto de pix? "))

if(valor <= 0){
    console.log("não pode fazer o pix")
}

if(saldo >= valor){
    console.log("pode fazer o pix.")
    saldo = saldo - valor
    console.log("Saldo: ", saldo)
} else {
    console.log("não faz")
}

