// cria uma variável chamada nome e guarda a string "prop"
let nome = "prop"
console.log(nome) // mostra o valor da variável no console


// cria um objeto vazio
let objeto = {}
console.log(objeto) // mostra o objeto vazio { }


// cria uma propriedade chamada "prop" dentro do objeto
objeto.prop = "ola, mundo do carai !!"


// mostra o objeto já com a propriedade criada
console.log(objeto)


// acessa a propriedade usando notação de ponto
console.log(objeto.prop)


// acessa a propriedade usando colchetes
// a variável nome tem o valor "prop"
console.log(objeto[nome])


// compara se acessar com ponto é igual a acessar com colchetes
console.log(objeto.prop === objeto["prop"]) // true


// compara usando a variável nome
console.log(objeto.prop === objeto[nome]) // true


// concatena duas strings "pro" + "p" que vira "prop"
console.log(objeto.prop === objeto["pro" + "p"]) // true


// cria uma variável com o nome da função do console
let funcao = "log"

// chama console.log usando colchetes (acesso dinâmico)
console[funcao](objeto)


// cria um objeto vazio chamado pessoa
const pessoa = {}


// adiciona propriedades ao objeto pessoa
pessoa.nome = "matheus"
pessoa.idade = 21

// mostra o objeto pessoa
console.log(pessoa)


// adiciona um array dentro do objeto pessoa
pessoa.colegas = ["breno", "bruno", "gabriel", "leo"]


// adiciona um objeto dentro do objeto pessoa
pessoa.endereco = {
    rua: "jose algusto lopes da silva do nascimento",
    numero: 207,
    bairro: "gupura",
}


// mostra o objeto pessoa completo
console.log(pessoa)