const Address = require('./address')
const phone = require('./phone')
const Person = require('./person')

const addr = new Address('7 de Setembro', 92, 'Centro', 'São Fidélis', 'RJ')
const phon = new phone('123456789', 'Celular')
const john = new Person('John Doe', addr, phon)

const addr2 = new Address('Rua 2', 123, 'Bairro 2', 'Cidade 2', 'Estado 2')
const phon2 = new phone('987654321', 'Fixo')
const jane = new Person('Jane Doe', addr2, phon2)


console.log(john)
console.log(john.address.fullAddress())
console.log(john.phone.fullPhone())

console.log(jane)
console.log(jane.address.fullAddress())
console.log(jane.phone.fullPhone())

