// let nombre = "andres";
// console.log(nombre);

/* 
estructura del condicion if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}

if(condicion){
  codigo a ejecutar cuando la condición es verdadera
}else{
  codigo a ejecutar cuando la condición no es verdadera
}

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  código a ejecutar cuando ninguna de las condiciones anteriores es verdadera
}

estructura del while
while(condicion){
  codigo ejecutar siempre y cuando la condicion es verdadera
}

estructura del for
for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

// let numero = 11;
// let primo = true;

// for (let i = 2; i < numero; i++) {
//   if (numero % i === 0) {
//     primo = false;
//   }
// }

// if (primo) {
//   console.log("Es un número primo");
// } else {
//   console.log("No es un número primo");
// }

/* 
switch(valor){
  case valor1:
    codigo a ejecutar cuando el valor1 === valor
    break;

  case valor2:
    codigo a ejecutar cuando el valor === valor2
    break;

  .
  .
  .
  default:
    codigo a ejecutar cuando el valor no coincide con ninguno de los anteriores valores
    break;
}
*/

let numeroUno = Number(prompt("ingrese el número uno"));
let numeroDos = Number(prompt("ingrese el número dos"));
let operacion = prompt("Ingrese la operacion");

switch (operacion) {
  case "+":
    alert(numeroUno + numeroDos);
    break;

  case "-":
    alert(numeroUno - numeroDos);
    break;

  case "*":
    alert(numeroUno * numeroDos);
    break;

  case "/":
    alert(numeroUno / numeroDos);
    break;

  default:
    alert("Operacion no reconocida");
    break;
}
