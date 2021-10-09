/** ======= Essa é a função que recebe as notas e armazena no array uma a uma!!! =======*/
var notasArmazenadas=[];
function ponteDeEntrada (){
  var entradaNotas = document.getElementById("recebeNota");
  var recebeNota = entradaNotas.value;
  var notaNum = parseFloat(recebeNota);
  console.log(notaNum); 
  
  notasArmazenadas.push(notaNum);
  console.log(notasArmazenadas);
 
}

/** ======= Essa é a função que pega os valores do array e faz a média, para imprimir na tela!!! =======*/

 
  function valorDeSaida(){

  var inputNotas = notasArmazenadas;/** ou seria .push(notasArmazenadas) */
  var notas = [];
  for (var contadorDeNotas=0; contadorDeNotas<inputNotas.length; contadorDeNotas++){
    
    if(contadorDeNotas>=0 && contadorDeNotas<=10){
      notas.push(inputNotas[contadorDeNotas]);
    }
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

  passagemDaMediaFinal = document.getElementById("exibeNaTela");
  var exibeNaTela = mediaFinal;
  passagemDaMediaFinal.innerHTML = "A média das suas notas é " + exibeNaTela.toFixed(2);

  console.log(mediaFinal); 
}
