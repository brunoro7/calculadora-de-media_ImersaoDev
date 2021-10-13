/** ======= Essa é a função que recebe as notas e armazena no array uma a uma!!! =======*/

var notasArmazenadas=[];
function ponteDeEntrada (){
  var entradaNotas = document.getElementById("recebeNota");
  var recebeNota = entradaNotas.value;
  var notaNum = parseFloat(recebeNota);
  /** console.log(notaNum); */ 
  
  /** console.log('log =>', isNaN(notaNum)); */
  if(isNaN(notaNum)) {
    return
  }

  notasArmazenadas.push(notaNum);
  /** console.log(notasArmazenadas); */

  exibirNota(notaNum);
  limparEntrada();
  focarNoInput();
}

/** === Função que ajuda exibir a conferência na tela === */

function exibirNota(nota) {
  let divVazia = document.getElementsByClassName("confereNotasUsuario");
  divVazia[0].innerHTML += ` ${nota} ;`
}

/** === Função que mantêm o input de entrada sempre limpo === */
function limparEntrada(){
  var entradaNotas = document.getElementById("recebeNota");
  entradaNotas.value = "";
}

/** === Função de foco no input de entrada após inserir === */
function focarNoInput(){
  var entradaNotas = document.getElementById("recebeNota");
  entradaNotas.focus();
}

/** ======= Função que pega os valores do array e faz a média,
 *            pra depois imprimir na tela!!! =======*/

function valorDeSaida(){

  var passagemDaMediaFinal = document.getElementById("exibeNaTela");
  var inputNotas = notasArmazenadas;/** ou seria .push(notasArmazenadas) */
  var notas = [];
  for (var contadorDeNotas=0; contadorDeNotas<inputNotas.length; contadorDeNotas++){
    
    if(contadorDeNotas>=0 && contadorDeNotas<=10){
      notas.push(inputNotas[contadorDeNotas]);
    }
  }

  if(notas.length === 0) {
    console.log('executou')
    passagemDaMediaFinal.innerHTML = 
      "Insira os valores antes de fazer o cálculo de média.";
    
    return
  }

  function soma(notas){
    var resultadoDaSoma=0;
    for (var i=0; i<notas.length; i++){
      if(notas[i]>0){
      resultadoDaSoma += notas[i];
      }
    }
      return resultadoDaSoma;
  }
  
  var quantNotas = notas.length;
  var mediaFinal = soma(notas)/quantNotas;
  
  var exibeNaTela = mediaFinal;
    passagemDaMediaFinal.innerHTML = 
      "A média das suas notas é " + exibeNaTela.toFixed(2);

      console.log(mediaFinal);
}
