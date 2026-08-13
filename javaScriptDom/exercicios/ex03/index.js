
function register(){
    const ull = document.getElementById("people-list")
    const inputName = document.getElementById("name")
    const inputAge = document.getElementById("age")

    let liName = inputName.value
    let liAge = inputAge.value

    if(inputName.value.trim() === "" || inputAge.value.trim() === ""){
        alert("tem nada nessa bosta escreve mano !!")
        return
    }

    let lii = document.createElement("li")
    let btnRemove = document.createElement("button")

    lii.textContent = "Nome: " + liName + " | " + "Idade: "+ liAge
    btnRemove.textContent = "Remover" 

    btnRemove.onclick = function removeRegister() {

        const excluir = btnRemove.parentNode
    ull.removeChild(excluir)
}
   
    lii.appendChild(btnRemove)
    ull.appendChild(lii)
    inputName.value = ""
    inputAge.value = ""
}


