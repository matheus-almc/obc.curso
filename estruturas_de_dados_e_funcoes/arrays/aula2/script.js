// push: Adiciona um elemento no final do array e devolve o novo tamanho do array

const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

let tamanho = arr.push("boramir") + arr.push("sacol") + arr.push("bosta")
// o valor a cima vai retornar o valor 30, que sao as soma de todos os elementos da array, a arr antes da alteracao tinha 8 elementos apos adicionar o boramir passamos a ter 9 , sacol 10 e por fim bosta 10 e como eu comcatenei todas 9 + 10 + 11 = 30 legal ne !!

console.log(tamanho)
console.log(arr)
//console.log(tamanho)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array

tamanho = arr.unshift("bostaaaa") + arr.unshift("capivara vei") + arr.unshift("coisa ruim")

tamanho = arr.unshift("45923")

// pop: Remove um elemento no final do array e devolve o elemento removido

let remove = arr.pop(arr[1])

console.log(remove)
console.log(arr)

console.log(tamanho)
console.log(tamanho)
console.log(tamanho)
console.log(arr)

// shift: Remove um elemento no começo do array e devolve o elemento removido

let removesh = arr.shift("Frodo")

//alert(removesh +" "+ remove)

console.log(removesh)

removesh = arr.shift(arr[10])

// includes: Verifica se um certo elemento está presente no array 

let inclui = arr.includes("bosta")
console.log(inclui)
inclui = arr.includes("sacol")
console.log(inclui)


// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array

let indice = arr.indexOf("bosta")

console.log(indice)

indice = arr.indexOf("Pippin")

console.log(indice)

indice = arr.indexOf("gimli")
console.log(indice)

indice = arr.indexOf("Gimli")

console.log(indice)

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original

let array = arr.slice(0, 5)

console.log(array) 

// Também pode ser usado com números negativos referenciar o final do array

let depois = arr.slice(-8)

console.log(depois)

console.log(arr)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)

let juntos = array.concat(depois, "bostona")

console.log(juntos)

// splice: Permite remover elementos em qualquer posição do array e substituir por novos

let removeTroca = juntos.splice(7, 1,"gadalf o bostao")

console.log(removeTroca)

// Usando o for para percorrer cada elemento do array



let arrai = ["bosta", "limao", "abobora","camaleao","freira","bolo", 800, false]
let oia = ""


//for (indice = 0 ; indice < arrai.length; indice++) {
//   let mostrar = arrai[indice]
//     oia += mostrar + " esta na posição " + indice + "\n"
//}

//alert(oia)

let verdadeiro = 0

let falso = 0

if (verdadeiro === 1 || falso === 0) {
    alert("verdade")
} else if (verdadeiro === 1 || verdadeiro === 1) {
 alert("verdade")
} else if (falso === 0 || verdadeiro === 0) {
    alert("falso")
}
