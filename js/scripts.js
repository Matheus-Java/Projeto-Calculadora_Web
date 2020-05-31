// Limpar tela
function limparTela() {
  window.location.reload()
}

// Exibir Conta
function exibir(n){
  var salvar = document.calculadora.calculo.value
  document.calculadora.calculo.value = salvar + n;
}

// Exibir Resultado
function calcular(){
  var resultado = document.calculadora.calculo.value
  document.calculadora.result.value = eval(resultado);
}

