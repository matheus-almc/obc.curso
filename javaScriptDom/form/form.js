function subimit(){
    const inputs = document.querySelectorAll(".in")
    const message = document.getElementById("message")

    let formularioValido = true

    for(let i = 0; i < inputs.length; i++) {
       
        if (inputs[i].value === "") {
            formularioValido = false
        }
    }

    if(formularioValido) {
        message.textContent = "Login feito"
        message.style.color = "green"
    } else {
        message.textContent = "Preencha todos os campos vazios"
        message.style.color = "red"
    }
}