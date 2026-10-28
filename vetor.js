// const medias = [5, 8.3, 10, 7, 4.4, 1, 2.9, 2]
// // crie uma lista de nomes com Ana, Bruno, Carla, Diego, Elisa, Fábio, Junior
// // e mostre no console, o nomes[3], e medias[3]
// const nomes = ["Ana", "Bruno", "Carla", "Diego", "Elisa", "Fábio", "Junior", "Vitor"]
// // console.log(nomes[3] + " " + medias[3]) // Diego 7
// const mediaDaEscola = 6;
// let aprovados = 0;
// let somaDasMedias = 0;
// //10
// for (let i = 0; i < medias.length; i++) { // i += 1 i++, i =  1
//     somaDasMedias = somaDasMedias + medias[i]; // 55 / i = 7

//     if (medias[i] >= mediaDaEscola) {
//         aprovados++
//     }
// } 
// console.log("Quantos foram aprovados: ", aprovados);
// console.log("Qual a média da turma?: ", (somaDasMedias / medias.length).toFixed(2))


// console.log(medias[1]) // 9
// console.log(medias[5]) // 7
// console.log(medias[4]) // 8.5
// console.log(medias.length) // 7
// console.log(medias[10]) // undefined

const prompt = require("prompt-sync")()

const medias = []
const mediaDaEscola = 7;
let input

while (input != -1) {
    while (input < 0 || isNaN(input)) {
        console.log("Valor inválido.");
        input = Number(prompt("Média do próximo aluno: "))
    }
    input = Number(prompt("Média do próximo aluno: "))
    medias.push(input);
}

console.log(medias)