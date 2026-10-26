
const prompt = require("prompt-sync")();

let km = Number(prompt("Quantos Km a corrida tem?"));
let minutos = Number(prompt("Quantos minutos a corrida tem?"));

let valor = 5 + 2 * km + minutos * 0.5;
console.log("R$: " + valor.toFixed(2));