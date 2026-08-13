let opcao = ""
let imoveis = []


do {
    let imoveisCadastrados = ""
    for (let i = 0; i < imoveis.length; i++) {
        imoveisCadastrados += 
        (i + 1) + " - " + 
        "Nome: " + imoveis[i].nome + "\n" + 
        "Quartos: " + imoveis[i].quartos + "\n" +
        "Banheiros: " + imoveis[i].banheiros + "\n" +
        "Garagem: " + imoveis[i].garagem + "\n\n"

        
    }
    opcao = prompt(
        "Seja bem vindo ao cadastro de imoveis\n\n" + 
        "Imoveis Cadastrados: " + imoveis.length + "\n\n" +
        "1.Cadastrar Imoveis\n" +
        "2.Mostrar Imoveis\n" + 
        "3.Encerrar programa"
    )

    switch (opcao) {
        case "1":
            let propriedade = {}
            propriedade.nome = prompt("Insira o Nome do Propietario")
            propriedade.quartos = prompt("Insira a quantidades de Quartos que a propiedade possui")
            propriedade.banheiros = prompt("Insira a quantidades de banheiros quea propiedade possui")
            propriedade.garagem = prompt("possui garagem (sim/nao)")
            imoveis.unshift(propriedade)
            break;
        case "2":
            alert("Imoveis Cadastrados:\n" + imoveisCadastrados )
            break    
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Não existe esta opcão.")
            break;
    }
} while (opcao !== "3");
