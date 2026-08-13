let number = parseFloat(prompt(
    "insira um numero para"
))

if (number < 0) {
    alert("este numero e negativo!")
} else if (number > 0) {
    alert("este numero e positivo!")
} else if (number === 0) {
    alert("este numero e igual a zero!")
}