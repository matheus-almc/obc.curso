function CalcularAreaTriangulo() {
    const base = prompt("Informe a base do triângulo:")
    const altura = prompt("Informe a altura do triangulo")
    return base * altura / 2
}

function CalculadoraAreaRetangulo() {
    const base = prompt("informe a base do Retângulo ")
    const altura = prompt("informe a base do seu Retângulo")
    return base * altura 
}

function CalculadoraAreaQuadrado() {
    const lado = prompt("informe o lado do seu quadrado")
    return lado * lado
}

function CalculadoraAreaTrapezio() {
    const baseMaior = prompt("Informe a base maior do seu trapezio")
    const baseMenor = prompt("Informe a base menor do seu trapezio")
    const altura = prompt("informe a altura do seu trapezio")
    return (baseMaior + baseMenor) * altura / 2
}

function CalculadoraAreaCirculo () {
    const pi = 3.14
    const raio = prompt("informe o raio do seu circulo")
    return pi * raio * raio
}

function exibirMenu() {
    return prompt(
        "calculadora geometrica\n\n" + 
        "1.calcular area do triangulo\n" +
        "2.calcular area do retangulo\n" +
        "3.calcular area do quadrado\n" +
        "4.calcular area do trapezio\n" +
        "5.calcular area do circulo\n" +
        "6.Sair"
    )
}

function executar() {
    let opcao = ""
    
    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case "1":
                 resultado = CalcularAreaTriangulo()
                break;
            case "2":
                 resultado = CalculadoraAreaRetangulo()
                break;
            case "3":
                 resultado = CalculadoraAreaQuadrado()
                break;
            case "4":
                 resultado = CalculadoraAreaTrapezio()
                break;
            case "5":
                 resultado = CalculadoraAreaCirculo()
                break;
            case "6":
                alert("Saindo...")
                break;
            default:
                alert("opcao invalida")
                break;
        }

        if (resultado) {
            alert("redultado: " + resultado)
        }

    } while (opcao !== "6");
}

executar()
