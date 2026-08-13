let x = parseFloat(prompt("insira um numero"))

let y = parseFloat(prompt("insira outro numero"))

if (x > y) {
    alert(x + " > " + y)
} else if (y > x) {
    alert(y + " > " + x)
} else if (x === 0 && y === 0) {
    alert("digita alguma coisa loko !!!")
}