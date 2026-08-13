function binarioParaDecimal(binario) {
  let decimal = 0;
  let tamanho = binario.length;

  for (let i = 0; i < tamanho; i++) {
    let bit = Number(binario[tamanho - 1 - i]); 
    decimal += bit * (2 ** i);
  }

  return decimal;
}

let result = prompt("insira 4 numeros ou mais para fazer a conversao de bits em um valor real")

alert(
    "este e seu numero convertido:" + "\n" +
    binarioParaDecimal(result)
)

//a funcao criada foi a binarioParaDecimal 