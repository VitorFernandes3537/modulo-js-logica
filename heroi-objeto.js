// // ===== HERÓI =====
// let nome = prompt("Qual é o nome do seu herói? ");
// let vida = 9;
// let veneno = 0;            // quantos passos o veneno ainda dura
// const inventario = [];

const prompt = require("prompt-sync")();

let combate = true;

const heroi = {
    nome: "Magno",
    vida: 10,
    dano: 3,
    veneno: 0,
    inventario: [],
    sorte: Math.random(),
    experiencia: 0,
    mana: 0,
    critico: 0.2,
    danoCritico: 2
}

const aranha = {
    nome: "aranha da caverna",
    vida: 10,
    dano: 2,
    chanceVeneno: 0.3,
    veneno: 2
}

// Teste de alteração da propriedade, ao mudar a propiedade da CONSTANTE heroi 
// eu consigo sem problemas, pois estou mudando uma propriedade da constante,
// e não a constante em sí. 
// console.log("Antes de mudar: ", heroi)

// heroi.nome = "Joao"

// console.log("Depois de mudar: ", heroi)


function calculoDanoAranha(heroi, aranha) {
    chance = Math.random();
    if (chance >= aranha.chanceVeneno) {
        heroi.veneno = aranha.veneno
        console.log("O heroi tomou veneno, e se sente muito mal", heroi.veneno)
    }
    heroi.vida = heroi.vida - aranha.dano
    console.log("A aranha te arranhou. você tomou: ", aranha.dano, " sua vida: ", heroi.vida)
}



while (combate === true) {
    console.log("(1) - testar calculo aranha")
    let escolha = prompt("> ")
    if (escolha === "1") {
        calculoDanoAranha(heroi, aranha)
    }
    if (heroi.vida <= 0) {
        combate = false
        console.log("foi ver se no céu tem pão")
    }
}