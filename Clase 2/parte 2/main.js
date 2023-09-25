/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

// i++    i = i + 1

// for(let i = 11; i < 100; i = i + 2){
//   console.log(i);
// }

// let numero = Number(prompt("Ingrese el numero"));

// for (let i = 1; i <= 10; i++) {
//   let resultado = numero * i;

//   alert(`${numero} * ${i} = ${resultado}`);
// }

// console.log(numero * 1);
// console.log(numero * 2);
// console.log(numero * 3);
// console.log(numero * 4);
// console.log(numero * 5);
// console.log(numero * 6);
// console.log(numero * 7);
// console.log(numero * 8);
// console.log(numero * 9);
// console.log(numero * 10);

// for (let turno = 1; turno <= 7; turno++) {
//   let nombre = prompt("Ingrese el nombre");
//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// alert("Turnos terminados vuelve el día siguiente")

// console.log("NOmbre juan turno #1");
// console.log("NOmbre andres turno #2");
// console.log("NOmbre juan turno #3");
// console.log("NOmbre juan turno #4");
// console.log("NOmbre juan turno #5");
// console.log("NOmbre juan turno #6");
// console.log("NOmbre juan turno #7");

// for(let i = 0; i < 10; i--){ BUCLE INFINITO CUIDADOOOOOOO!!!!
//   console.log(i);
// }

//BREAK;
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }

//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del bucle while

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

// let repetir = true;

// while(repetir){  BUCLE INFINITO CUIDADOOOOOOO!
//   console.log("hola entramos");
// }

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("Usuario incorrecto");

//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

// let numero = Number(prompt("Ingrese un número del 0 al 10"));

// while (numero != 5) {
//   alert("Número incorrecto");

//   if(numero > 5){
//     alert("Ingresa uno menor")
//   }else if(numero < 5){
//     alert("Ingresa uno mayor")
//   }

//   numero = Number(prompt("Ingrese un número del 0 al 10"));
// }

// alert("Ganaste!");

/* 
estrcutura del do while

do{
  codigo a ejecutar por primera vez y luego se repite si la condicioon es veraddera
}while(condicion);
*/

// let repetir = false;

// do {
//   console.log("Hola");
// } while (repetir);

// while (repetir) {
//   console.log("Hola");
// }

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar cuando valor sea igual a valor1
    break;

  case valor2:
    codigo a ejecutar cuando valor sea igual a valor2
    break;

  .
  .
  .

  case valorn: 
    codigo a ejecutar cuando valor sea igual a valorn
    break;

  default:
    codigo a ejecutar cuando el valor no coincide con ninguno de los anteriores
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("Moneda de argentina");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;

//   case "cop":
//     console.log("Moneda de colombia");
//     break;

//   case "mxn":
//     console.log("Moneda de mexico");
//     break;

//   default:
//     console.log("Moneda desconocida");
//     break;
// }

// let entrada = prompt("Ingrese un nombre");

// while (entrada != "ESC") {
//   switch (entrada) {
//     case "ANA":
//       alert("Hola ANA");
//       break;

//     case "JUAN":
//       alert("Hola JUAN");
//       break;

//     default:
//       alert("Quién eres?")
//       break;
//   }

//   entrada = prompt("Ingrese un nombre");
// }
