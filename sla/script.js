let horasDiarias = document.querySelector("#horas-diarias");
let diasMes = document.querySelector("#dias-mes");
let despesas = document.querySelector("#despesas");
let equipamento = document.querySelector("#equipamento");
let resultado = document.querySelector("#valor-total");
let escondido = document.querySelector("#resultado");

const enviar = document.querySelector("#calcular");


enviar.addEventListener("click", function (e) {
    e.preventDefault();


    if (horasDiarias.value == "" || diasMes.value == "" || despesas.value == "" || equipamento.value == "") {
        alert("preencha todos os campos");
    } else {
        // valor do equipamento pago por mes.
        let equipamentoMes = (equipamento.value) / 12;
        //despesas mensais + equipamento mensais
        let despesasTotais = (despesas.value) + equipamentoMes;
        //horas trabalhadas por mes
        let horasMes = (horasDiarias.value) * (diasMes.value);

        const valorHora = (despesasTotais / horasMes / 0.5).toFixed(2);

        escondido.classList.remove("hidden")
        resultado.innerText = `R$ ${valorHora}`

        horasDiarias.value = ""
        diasMes.value = ""
        despesas.value = ""
        equipamento.value = ""
    }




});  