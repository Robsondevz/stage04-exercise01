  /*A soma dos dois números;
  A subtração dos dois números;
  A multiplicação dos dois números;
  A divisão dos dois números;
  O resto da divisão dos dois números;
  Verifique se a soma dos dois números é par (ou ímpar);
  Verifique se os dois números inseridos são iguais (ou diferentes)
Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!*/


let numberOne = prompt ( "Digite o primeiro número")
let numberTwo = prompt ( "Digite o segundo número")
 
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne & numberTwo
const parImpar = numberOne + numberTwo 


alert ( "A soma é " + sum)
alert ("A subtração é " + sub) 
alert ("A multiplicação é " + multi)
alert ("A divisão é " + div)
alert ("O resto da divisão é " + restDiv)

if ( parImpar%2 == 0) { alert (`O número ${parImpar} é Par`)}

else { alert (`O número ${parImpar} é Impar`)}

if ( numberOne == numberTwo) {
 alert ( `O número é Igual`) 
}

else { alert (`O número é Diferente`)}