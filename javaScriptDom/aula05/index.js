function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert("Usuario: " + username + " Registrado!")
    } else {
        alert("Senhas não conferem!!")
    }
}