const prompt = require("prompt-sync")();

let saldo = 150
let valor = Number(prompt("quanto de pix? "))


while (valor <= 0 || isNaN(valor)) {
    console.log("Valor inválido.");
    valor = Number(prompt("Valor do Pix: "));
}

if (saldo >= valor) {
    console.log("pode fazer o pix.")
    saldo = saldo - valor
    console.log("Saldo: ", saldo)
} else {
    console.log("não faz")
}

