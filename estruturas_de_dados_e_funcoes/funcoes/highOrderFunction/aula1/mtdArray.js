const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe:"Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

//
const niveis = [] 

for (let i = 0; i < personagens.length; i++) {
    niveis.push(personagens[i].nivel)
}

console.log(niveis)


//const nomes = []

//for (let i = 0 ; i < personagens.length; i++) {
//    nomes.push(personagens[i].nome)
//} 

//console.log(nomes)


// map: permite obter um novo array a partir de um array existente
const nomes = personagens.map(function (personagens){
    return personagens.nome
})


console.log(nomes)

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
    return personagem.raca === "Orc"
})

//for (let i = 0 ; i < personagens.length; i++) {
    //const personagem = personagens[i]
    //if (personagem.raca === "Orc") {
      //  orcs.push(personagem)
    //} 
//}

console.log(orcs)

//let nivelTotal = 0

// for (let i = 0; i < personagens.length; i++) {
//     nivelTotal += personagens[i].nivel
// }


const nivelTotal = personagens.reduce(function(acumulador,personagem){
    return acumulador + personagem.nivel
}, 0)

console.log(nivelTotal)

const name = personagens.reduce(function(acumulador, personagem){
    if (acumulador[personagem.raca]){
        acumulador[personagem.raca].push(personagem)
    } else {
        acumulador[personagem.raca] = [personagem]
    }

    return acumulador
}, {})

console.log(name)

//sort e para ordenar de acordo com o valor 
const veri = personagens.sort(function (a, b) {
    return a.nivel - b.nivel
})

console.log(veri)