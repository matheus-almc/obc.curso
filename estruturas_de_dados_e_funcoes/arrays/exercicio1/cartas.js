let opcao = ""
let cartas = []


do {  

    opcao = parseInt(prompt(
        "Quantidades de cartas no baralho " + cartas.length + "\n" +
        "1.adicionar Carta\n" +
        "2.Remover Carta\n" + 
        "3.sair"

    ))

    switch (opcao) {
        case 1:
            let adicionar = prompt("adicione o nome da carta")
            cartas.unshift(adicionar)
            alert("voce adicionou a carta: " + adicionar)
            break;
        case 2 :
        let remover = cartas.shift()
        alert("voce removeu: " + remover)
            break
        case 3:
            alert("saindo...")
            break
        default:
            alert("esta opcao nao existe!!")
            break;
    }
} while (opcao !== 3);