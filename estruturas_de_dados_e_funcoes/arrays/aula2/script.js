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

alert(removesh +" "+ remove)

console.log(removesh)

removesh = arr.shift(arr[10])