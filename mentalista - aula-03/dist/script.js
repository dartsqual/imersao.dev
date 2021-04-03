var secretNum = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um numero entre 0 e 10"))

  if (secretNum == chute) {
    alert("Acertou")
    break
  } else if (chute < secretNum ) {
    alert("O numero secreto é maior")
    tentativas = tentativas - 1
  } else if (chute > secretNum ) {
    alert("O numero secreto é menor")
    tentativas = tentativas - 1
  } 
}

if (chute != secretNum) {
  alert("Suas tentativas acabaram, o numero secreto era " + secretNum)
}

//Funções aprendidas
//alert = exibe mensagem para o usuário em poup-up
//document.write = exibe mensagem na pagina onde for definido
//console.log = exibe mensagem no console dev do navegador
// usando while = looping de condição ou enquanto