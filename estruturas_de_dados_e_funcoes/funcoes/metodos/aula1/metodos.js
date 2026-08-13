let pessoa = {
    nome: "Matheus",
    idade: 21,
    dizerOla() {
        console.log("olá, mundo! meu nome é " + this.nome + " e tenho " + this.idade + " de idade")
    }
}


console.log(pessoa)

pessoa.dizerOla

let x = 10

function teste() {
    let x = 20
    return x
}

teste()

console.log(teste())