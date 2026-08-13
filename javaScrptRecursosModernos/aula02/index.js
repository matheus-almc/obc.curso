function normalSum(a, b) {
    return a + b
}

console.log(`soma normal: ${normalSum(2, 2)}`)

const anonymousSum = function (a, b) {
    return a + b
}

console.log(`soma anonima: ${anonymousSum(2, 2)}`)

const arrowSum = (a, b) => {
    return a + b
}

console.log(`soma arrow function: ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b

console.log(`subtracao: ${subtract(2, 2)}`)

const double = n => `o dobro de ${n} é ${n * 2}`

const number = 21
console.log(`Dobro ${double(number)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']

const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)