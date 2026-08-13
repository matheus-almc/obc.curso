function show() {
    // obter um elemento unico a partir do seu id
    const contactList = document.getElementById("contact-list")
    console.log(contactList)

    // Obter vários elementos (HTMLcollection) a partir de um nome de tag 
    const liElements = document.getElementsByTagName("li")
    console.log(liElements)

    //Obter vários elememtos (HTMLcollection) a partir de uma classe
    const contactInputs = document.getElementsByClassName("contact-input")
    console.log(contactInputs)

    //obter varios elementos (nodeList) a partir do atributo name
    const contact1 = document.getElementsByClassName("contact1")
    console.log(contact1)

    // obter varios elementos (nodeList) a partir de uma query (semelhante aos seletores do css)
    const contacts = document.querySelectorAll("#contact-list > li > label")
    console.log(contacts)

    // Obter um elemento a partir de uma query (o primeiro elemento s correspoder)
    const contact = document.querySelector("#contact-list > li > label")
    console.log(contact)
    console.log(contact.textContent)
}



