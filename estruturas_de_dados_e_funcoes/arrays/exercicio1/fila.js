//menu interativo 
//lista de pacientes // usar for para mostrar estes paciente 
//visualizacao da lista no menu // criar uma variavel deparada
//opcoes de adicionar paciente e excluir paciente // push para adicionar a array e shift para consultalo 

//vamos usar do while, swicth , for, e array

let opcao = ''
let pacientes = []
let menu = ""

do {
    menu = ""

    for (let index = 0; index < pacientes.length; index++) {
         menu += (index + 1) + "- " + pacientes[index] + "\n"
    }

    opcao = parseInt(prompt(
        "sejam bem vindos a fila de espera:\n" +
        menu + "\n\n" +
        "1.Adicionar Paciente\n" +
        "2.Atender Paciente\n" +
        "3.Sair"

    ))

    switch (opcao) {
        case 1:
            let adicionar = prompt("adicione o nome do paciente")
            pacientes.push(adicionar)
            alert(adicionar + " Foi adicionado!")
            break;
        case 2:
            let remover = pacientes.shift()
            alert(remover + " Foi Atendida!")
            break
        case 3:
            alert("Encerrando o Atendimento")
            break
        default:
            break;
    }


} while (opcao !== 3);