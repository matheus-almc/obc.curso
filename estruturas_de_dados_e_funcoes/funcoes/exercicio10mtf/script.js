const vagas = []

function listarVagas (){
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += "(" + vaga.candidatos.length + ".candidatos)"

        return textoFinal
    },"")
}

function criarVagas() {
    const nome = prompt("Insira o nome da vaga!!")
    const descricao = prompt("Insira a descricao da vaga!!")
    const dataLimite = prompt("insira a data limite da vaga!!")

    const confirmacao = confirm(
        "deseja criar a vaga:\n" +
        "Nome: " + nome + "\n" +
        "Descrição: " + descricao + "\n" + 
        "Data Limite: " + dataLimite 
    )

    if(confirmacao){
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert("Vaga Criada!")
    }
}


function exibirVaga() {
    const indice = prompt("Insira o numero da vaga!")
    const vaga = vagas[indice]

    const candidatosEmTexto = vaga.candidatos.reduce((textoFinal, candidato) => textoFinal + "\n - " + candidato, "")

    alert(
    "Vaga nº " + indice +
    "\nNome: " + vaga.nome +
    "\nDescrição: " + vaga.descricao +
    "\nData limite: " + vaga.dataLimite +
    "\nQuantidade de candidatos: " + vaga.candidatos.length +
    "\nCandidatos inscritos:" + candidatosEmTexto
  )

  if (!vaga) {
    alert("Vaga não encontrada!")
    return
}
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")

    const indice = prompt("Informe o indice da vaga para a qual o(a) candidato(a) deseja se inscrever:")

    const vaga = vagas[indice]

    const confirmacao = confirm(
        "deseja increver o candidato " + candidato + " na vaga " + indice + "?\n" + 
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\n Data limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("isncrição Realizada")
    }

    if (!vaga) {
    alert("Vaga não encontrada!")
    return
}
}

function excluirVaga() {
    const indice = prompt("qual e o indice da vaga que deseja excluir")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "tem certeza que deseja excluir a vaga " + indice + "?\n" + 
        "Nome: " + vaga.nome
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("vaga excluida.")
    }

    if (!vaga) {
    alert("Vaga não encontrada!")
    return
}
}

function exibirMenu() {
    const opcao = prompt(
        "cadastro de Vagas de Emprego" + 
        "\n\nEscolha uma das opções" +
        "\n1. Listar vagas disponiveis" +
        "\n2. Criar uma nova vaga" + 
        "\n3. Visualizar uma vaga" + 
        "\n4. Inscrever um(a) candidato(a)" + 
        "\n5. Excluir uma vaga" + 
        "\n6. sair"
    )

    return opcao
}

function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
                            case "1":
                listarVagas()
                break;
                            case "2":
                criarVagas()
                break;
                            case "3":
                exibirVaga()
                break;
                            case "4":
                inscreverCandidato()
                break;
                            case "5":
                excluirVaga()
                break;
                            case "6":
                alert("saindo...")
                break;
            default:
                break;
        }
    } while (opcao !== "6");
    
}



executar()