const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function() {
    input.value =  'ola mundo' 

    console.log(input.value)
    console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function () {
     //input.type = input.type !== 'radio' ? 'radio' : 'text'

     input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function() {
    input.value = 'Digite algo...'
})

document.getElementById('disable').addEventListener('click', function() {
    const diss = input.setAttribute('disabled', !input.disabled)

    input.disabled = input.disabled === diss ? diss : !diss 
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse
    console.log("o valor do atribito data-something-else é: " + data)
    input.dataset.somethingElse = 'algum outro valor'
    console.log("o valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
})