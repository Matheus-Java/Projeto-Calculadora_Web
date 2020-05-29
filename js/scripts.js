// Limpar tela
function limparTela() {
  window.location.reload()
}

// Exibir valores
function exibir(n){
  var salvar = document.calculadora.result.value
  document.calculadora.result.value = salvar + n;
}


