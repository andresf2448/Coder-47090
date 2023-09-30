/* 
estructura de una función

function nombreFuncion(){
  código e ejecutar por la función
}

nombreFuncion();
*/

// function saludar() {
//   console.log("Hola a todos");
// }

// saludar();

// function pedirDatos(){
//   let nombre = prompt("Ingrese su nombre");
//   alert(`El nombre es ${nombre}`);
// }

// pedirDatos();

/* 
Estructura de una función con parámetros

function nombreFuncion(parm1, parm2, ..., parmn){
  código a ejecutar por la función
}

nombreFuncion(valor1, valor2, ..., valorn);
*/

// function pedirDatos(nombre, saludo) {
//   console.log(`${saludo} ${nombre}`);
// }

// pedirDatos("andres", "Hola");
// pedirDatos("camila", "Bienvenida");

// function sumar(numeroUno, numeroDos) {
//   console.log(numeroUno + numeroDos);
// }

// sumar(4, 5);
// sumar(4, 20);

// function enviarEmail(email) {
//   console.log(`Envio de correo a ${email}`);
// }

// enviarEmail("andres@gmail.com");
// enviarEmail("juan@gmail.com");

// function sumar(numeroUno, numeroDos) {
//   return numeroUno + numeroDos;
// }

// let resultado = sumar(5, 6);
// console.log("resultado", resultado);

// function armar(partes) {
//   return `Muñeco armado con ${partes}`;
// }

// function pintar(armado) {
//   return `${armado} y pintado`;
// }

// function vestirBodega(muneco) {
//   console.log(`${muneco}, Muñeco vestido y enviado a bodega`);
// }

// let armadoMuneco = armar("madera");
// let pintado = pintar(armadoMuneco);
// vestirBodega(pintado);

// function saludar(){
//   console.log("Hola");
//   return;
//   console.log("chao");
// }

// saludar();

// function calculadora(numeroUno, numeroDos, operacion) {
//   switch (operacion) {
//     case "+":
//       return numeroUno + numeroDos;
//       break;

//     case "-":
//       return numeroUno - numeroDos;
//       break;

//     case "*":
//       return numeroUno * numeroDos;
//       break;

//     case "/":
//       return numeroUno / numeroDos;
//       break;

//     default:
//       return "Operación no reconocida";
//       break;
//   }
// }

// let numero1 = Number(prompt("Ingrese el número uno"));
// let numero2 = Number(prompt("Ingrese el número dos"));
// let op = prompt("Ingrese la operación");

// let resultado = calculadora(numero1, numero2, op);
// alert(`${numero1} ${op} ${numero2} = ${resultado}`);

// let resultado;

// function sumar(num1, num2) {
//   resultado = num1 + num2;
// }

// sumar(5, 6);
// console.log(resultado);

// {
//   var saludo = "Hola";
// }

// console.log(saludo);

// let nombre = "andres";

// function saludar() {
//   let nombre = "juan";
//   console.log(nombre);
// }
// saludar();

// console.log(nombre);

// function sumar(num1, num2){
//   let resultado = num1 + num2;
//   return resultado;
// }

// function restar(num1, num2){
//   let resultado = num1 - num2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(5, 6));

// const suma = (a, b) => {
//   return a + b;
// };

// console.log(suma(5, 6));

// si no tiene parámetros se dejan lso apréntesis vacíos
// si tiene un parametro se pueden quitar los paréntesis
// si no colocamos llaves ni return, la arrow function tiene un return implicito

// const saludar = () => {
//   return "Hola";
// };

// console.log(saludar());

// const sumar = x => {
//   return x + 20;
// };

// console.log(sumar(5));

// const saludar = (nombre) => `Hola ${nombre}`;
// console.log(saludar("andres"));

// console.log(saludar());

// const saludar = () => "hola";

// console.log(saludar());

// function saludar() {
//   return "Hola";
// }

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const iva = (precio) => precio * 0.21;
let precioProducto = 1000;
let descuento = 100;

// (precioProducto + iva) - descuento
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
// = resta(suma(1000, iva(1000)), 100);
// = resta(suma(1000, 210), 100);
// = resta(1210, 100);
// = 1110

console.log(nuevoPrecio);
