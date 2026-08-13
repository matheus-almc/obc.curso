function pintar() {
    const cor = document.querySelectorAll(".text")

    for (let i = 0; i < cor.length; i++) {
        if (cor[i].style.color === "") {
            cor[i].style.color = "red"
        } else {
            cor[i].style.color = ""
        }
    }


   }
    
function increase() {
    const text = document.querySelectorAll(".text")

    for(let i = 0;i < text.length; i++) {
    
      //pega o tamnaho do elemento atual
    let currentSize = parseFloat(getComputedStyle(text[i]).fontSize)

    if(currentSize < 80){
        //aumenta 5px
    text[i].style.fontSize = (currentSize + 5) + "px"
    }
      

    }

}

function decrease() {
    const text = document.querySelectorAll(".text")

    for(let i = 0;i < text.length; i++) {
    
      //pega o tamnaho do elemento atual
    let currentSize = parseFloat(getComputedStyle(text[i]).fontSize)

    if(currentSize > 13) {
        //diminui 5px
    text[i].style.fontSize = (currentSize - 5) + "px"
    }
      
    }

}

