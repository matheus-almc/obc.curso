function addItem(){
    const listaUl = document.getElementById("list") 
    
    const inputValue = document.getElementById("item")
    
     if (inputValue.value.trim() === "") {
        alert("escreve porra")
        return
    }

    const lis = document.createElement("li")
    
    lis.innerText = inputValue.value

    listaUl.appendChild(lis)

    inputValue.value = ""

}

function remover() {
    const ule = document.getElementById("list")

    const itens = document.getElementsByTagName("li")

    if(itens.length > 0) { 
        ule.removeChild(itens[itens.length - 1])
    } 
}