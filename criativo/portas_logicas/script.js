let portaA = ''
let portaB = ''
let opcao = ""

do {
    opcao = parseFloat(prompt(
        "seja bem vindo a sua tabela de portas logicas de computadores e suas operações\n\n" +
        "1.END\n" +
        "2.OR\n" +
        "3.NOT\n" +
        "4.NAND\n" +
        "5.NOR\n" +
        "6.XOR\n" +
        "7.XNOR\n"
    ))


    switch (opcao) {
        case 1:
            portaA = parseFloat(prompt("insira o valor da porta A"))
            portaB = parseFloat(prompt("insira o valor da porta B"))

            if (portaA === 1 && portaB === 0 || portaA === 0 && portaB === 1 ) {
            alert(portaA + " AND " + portaB + " = 0")
            } else if (portaA === 1 || portaB === 1) {
            alert(portaA + " AND " + portaB + " = 1")
            } else if (portaA === 0 || portaB === 0) {
                alert(portaA + " AND " + portaB + " = 0")
             }
            break;
        case 2:
            portaA = parseFloat(prompt("insira o valor da porta A"))
            portaB = parseFloat(prompt("insira o valor da porta B"))

            if (portaA === 1 && portaB === 0 || portaA === 0 && portaB === 1 ) {
            alert(portaA + " AND " + portaB + " = 1")
            } else if (portaA === 1 || portaB === 1) {
            alert(portaA + " AND " + portaB + " = 1")
            } else if (portaA === 0 || portaB === 0) {
                alert(portaA + " AND " + portaB + " = 0")
             }
            break;
        case 3:
            portaA = parseFloat(prompt("insira o valor da porta A"))

            if (portaA === 1) {
                alert(portaA + " NOT = 0")
            } else if (portaA + " NOT = 1")

            break
        case 4:
            portaA = parseFloat(prompt("insira o valor da porta A"))
            portaB = parseFloat(prompt("insira o valor da porta B"))

            if (portaA === 1 && portaB === 0 || portaA === 0 && portaB === 1 ) {
            alert(portaA + " AND " + portaB + " = 1")
            } else if (portaA === 1 || portaB === 1) {
            alert(portaA + " AND " + portaB + " = 0")
            } else if (portaA === 0 || portaB === 0) {
                alert(portaA + " AND " + portaB + " = 1")
             }
            break
        case 5:
             portaA = parseFloat(prompt("insira o valor da porta A"))
            portaB = parseFloat(prompt("insira o valor da porta B"))

            if (portaA === 1 && portaB === 0 || portaA === 0 && portaB === 1 ) {
            alert(portaA + " AND " + portaB + " = 0")
            } else if (portaA === 1 || portaB === 1) {
            alert(portaA + " AND " + portaB + " = 0")
            } else if (portaA === 0 || portaB === 0) {
                alert(portaA + " AND " + portaB + " = 1")
             }
            break
        case 6:
             portaA = parseFloat(prompt("insira o valor da porta A"))
            portaB = parseFloat(prompt("insira o valor da porta B"))

            if (portaA === 1 && portaB === 0 || portaA === 0 && portaB === 1 ) {
            alert(portaA + " AND " + portaB + " = 0")
            } else if (portaA === 1 || portaB === 1) {
            alert(portaA + " AND " + portaB + " = 1")
            } else if (portaA === 0 || portaB === 0) {
                alert(portaA + " AND " + portaB + " = 0")
             }
            break
        case 7:
             portaA = parseFloat(prompt("insira o valor da porta A"))
            portaB = parseFloat(prompt("insira o valor da porta B"))

            if (portaA === 1 && portaB === 0 || portaA === 0 && portaB === 1 ) {
            alert(portaA + " AND " + portaB + " = 0")
            } else if (portaA === 1 || portaB === 1) {
            alert(portaA + " AND " + portaB + " = 1")
            } else if (portaA === 0 || portaB === 0) {
                alert(portaA + " AND " + portaB + " = 1")
             }
            break
        default:
            alert("essa alternativa nao existe")
            break;
    }

    opcao = prompt("deseja continuar (sim/nao)")
} while (opcao === ("sim"));