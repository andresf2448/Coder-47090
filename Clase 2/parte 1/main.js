/* 
Boolean(0) => false
Boolean(1) => true
Boolean("") => false
Boolean("andres") => true

= asignación
== comparación pero solo de valor
=== comparación tanto de valor como de tipo
*/

/* 
estructura del condicional if

if(condicion o valor true/false){
  codigo en caso de que la condicion o el valor sean verdaderos
}
*/

// if(true){
//   console.log("Hola entramos");
// }

// console.log("Proceso terminado");

// let edad = Number(prompt("Ingrese su edad"));

// if (edad >= 18) {
//   alert("Eres mayor de edad puedes entrar");
// }

/* 
estructura del if else

if(condicion){
  codigo a ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion no es verdadera
}
*/

// let edad = Number(prompt("Ingrese la edad"));

// if (edad >= 18) {
//   alert("Puedes ingresar");
// } else {
//   alert("No puedes ingresar");
// }

// let respuesta = prompt("Terminaste la tarea?").toLowerCase();

// if (respuesta === "si") {
//   alert("Puede salir a jugar");
// } else {
//   alert("No puedes salir a jugar");
// }

/* 
Estructura del conodicion if else if else

if(condicion1){
  codigo a ejecutar cuando la condicion es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let respuesta = prompt("Terminaste la tarea?").toLowerCase();

// if (respuesta === "si") {
//   let verificacion = prompt("Estás seguro?");

//   if (verificacion === "si") {
//     alert("Puede salir a jugar");
//   }
// } else if (respuesta === "no") {
//   alert("No puedes salir a jugar");
// } else {
//   alert("Opción no identificada");
// }

// let edad = Number(prompt("Ingrese la edad"));

// if (edad < 14) {
//   alert("No puedes entrar a la fiesta");
// } else if (edad < 18) {
//   alert("Puedes entrar a la fiesta con un adulto responsable");
// }else{
//   alert("Puedes entrar a la fiesta")
// }

/* 
valor1 && valor2 devuelve verdadero cuando ambos valores son verdaderas, en caso contrario da falso
valor1 || valor2 deuelve verdadero cuando al menos uno de los dos valores es verdadero, en caso contrario devuelve falso
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if (nombre != "" && apellido != "") {
//   alert(`Hola ${nombre} ${apellido}`);
// } else {
//   alert("se lido");
// }

// let nombre = "andres";
// let edad = 26;

// console.log("Hola " + nombre + " tu edad es: " + edad);
// console.log(`Hola ${nombre} tu edad es: ${edad}`);

// let nombre = prompt("Ingrese un nombre");

// if (nombre === "ANA" || nombre === "ana") {
//   alert("Hola ana");
// } else {
//   alert("No eres ana");
// }

let nombre = prompt("Ingrese un nombre");

if (nombre != "" && (nombre === "EMA" || nombre === "ema")) {
  alert("Hola ema");
} else {
  alert("nombre invalido");
}
