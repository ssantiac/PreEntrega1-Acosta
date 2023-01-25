let resultado = 0;
const numero = parseInt(prompt("Ingrese primer numero:"));
const numero2 = parseInt(prompt("Ingrese segundo numero:"));
const calculo = prompt("Ingrese la operacion deseada + - * /");

switch (calculo) {
  case "-":
    resultado = numero - numero2;
    prompt("El resultado es:", resultado);
    break;
  case "+":
    resultado = numero + numero2;
    prompt("El resultado es:", numero + numero2);
    break;
  case "/":
    resultado = numero / numero2;
    prompt("El resultado es:", resultado);
    break;
  case "*":
    resultado = numero * numero2;
    prompt("El resultado es:", resultado);
    break;
}

function sumar(numero, numero2) {
  return parseInt(numero) + parseInt(numero2);
}
function restar(numero, numero2) {
  return parseInt(numero) - parseInt(numero2);
}
function multiplicar(numero, numero2) {
  return parseInt(numero) * parseInt(numero2);
}
function dividir(numero, numero2) {
  return parseInt(numero) / parseInt(numero2);
}
