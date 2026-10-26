// let km = 8;
// km = km + 3; // 93
// console.log("O valor da variável KM é: " + km)

// console.log(typeof km)


// Abaixo é o teste o cálculo com o o contéudo da variável km = 3 e o minuto = 45, total = 33.5

// const tarifaBase = 5;
// const precoPorKm = 2;
// const valorPorMinuto = 0.5;

// let km = 3;
// let minuto = 45;
// let valorDaCorrida = tarifaBase + 
//         precoPorKm * km + minuto * valorPorMinuto
// console.log("R$: " + valorDaCorrida.toFixed(2)) // 31

// TypeError: Assignment to constant variable. eu tentei atribuir um valor e deu esse erro
// significa que não posso alterar valores de uma variável declarada como "const" Constante 

const tarifaBase = 5;
const precoPorKm = 2;
const valorPorMinuto = 0.5;

let km = 3;
let minuto = 45;
let valorDaCorrida = tarifaBase + 
        precoPorKm * km + minuto * valorPorMinuto
console.log("R$: " + valorDaCorrida.toFixed(2)) 