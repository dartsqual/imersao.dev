var primeValor = parseInt(prompt("Digite o Primeiro Valor:"))
var segValor = parseInt(prompt("Digite o Segundo Valor:"))

var operação = prompt("Digite 1 p/ divisão, 2 p/ multiplicação, 3 para soma e 4 para subtração")

if  (operação == 1){
  var resultado = primeValor / segValor
  document.write("<h2>" + primeValor + " / " + segValor + " = " + resultado + "</h2>")
}else if (operação == 2) {
  var resultado = primeValor * segValor
  document.write("<h2>" + primeValor + " * " + segValor + " = " + resultado + "</h2>")
} else if (operação == 3) {
  var resultado = primeValor + segValor
  document.write("<h2>" + primeValor + " + " + segValor + " = " + resultado + "</h2>")
} else if (operação == 4) {
  var resultado = primeValor - segValor
  document.write("<h2>" + primeValor + " - " + segValor + " = " + resultado + "</h2>") 
} else {
  document.write("<h2>Opção Inválida</h2>")
}

//escrevendo na tela usando document.write()
//concatenação = juntar palavras(srings) ou varivaeis
//usando condicionais if, else if e else
//if = se
//else = senão
//else if = senão se
