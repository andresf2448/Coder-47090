//Spread operator (...)
// const nombres = ["andres", "juan", "camila"];
// console.log(nombres);
// console.log(...nombres);
// console.log(nombres.join(" "));

//Math
// const numeros = [2, 3, 45, 67, 8];
// console.log(Math.min(...numeros));
// console.log(Math.max(...numeros));

//paso por valor
// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "camila";
// console.log(nombre1);

// let persona1 = { nombre: "andres", edad: 35 };
// let persona2 = {...persona1};

// persona2.nombre = "camila";
// console.log(persona1);

// const nombres = ["andres", "juan", "camila"];
// const apellidos = ["ruiz", "perez", "ramirez"];

// const varios = [...nombres, ...apellidos];
// console.log(varios);

// const usuario1 = {
//   nombre: "efrain",
//   edad: 50,
//   curso: "javascript",
// };

// const usuario2 = {
//   ...usuario1,
//   edad: 67,
//   direccion: "AV",
// };

// console.log(usuario2);

// const sumar = (...numeros) => {
//   console.log(numeros);
// };

// sumar(32, 32, 4, 57, 8890);
// sumar(3, 4);

// const sumar = (...numeros) => {
//   let total = numeros.reduce((acum, item) => acum + item, 0);
//   console.log(total);
// };

// sumar(32, 32, 4, 57, 8890);
// sumar(3, 4);

//REPASO
/* 
condicionales

if(condicion){
  codigo a ejecutar cuanod la condición es verdadera
}

if(condicion){
  codigo ejecutar cuando la condicion es verdadera
}else{
  codigo a ejecutar cuando la condicion es falsa
}

if(condicion1){
  codgio a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codgio a ejecutar cuando la condicion2 es verdadera
}else{
  código a ejecutar cuando ninguna de las condiciones anteriores es verdadera
}
*/

/* 
for(desde; hasta; actualizacion){
  codigo a repetir
}

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

/* 
funciones

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}

nombreFuncion(valor1, valor2, ..., valorn);

const nombreFuncion = (parm1, parm2, ..., paramn) => {
  codigo a ejecutar por la funcion
}

si la función no tiene parámetros debemos dejar los parentesis vacios
si la funcion solo tiene un parametro se pueden quitar los parentesis
si quitamos las llaves y el return entonces la funcion retorna implicitamente
*/

/* 
Objetos
function Producto(nombre, precio){
  this.nombre = nombre;
  this.precio = precio;
}

class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }

  metodo1(){
    codigo a ejecutar por el metodo
  }

  metodo2(){
    codigo a ejecutar por el metodo
  }
}

const producto1 = new Producto("camisa", 1089);
*/

/* 
métodos de los arreglos
forEach
find
filter
map
*/
//////////////////////////////////////////////////////////////////////////////////
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 750 },
//   { id: 3, nombre: "media", precio: 320 },
//   { id: 4, nombre: "zapato", precio: 457 },
// ];

// //funcion para agregar el producto
// const agregar = (id) => {
//   //encontramos el producto por id
//   const productoAgregar = productos.find((item) => item.id === id);

//   alert(`
//     id: ${id}
//     Nombre: ${productoAgregar.nombre}
//     $${productoAgregar.precio}
//   `);
// };

// //mostramos los productos en el dom
// productos.forEach((item) => {
//   let div = document.createElement("div");

//   //agregamos el boton agregar con un id personalizado
//   div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <button id="boton${item.id}">Agregar</button>
//     <hr/>
//   `;
//   document.body.append(div);

//   //traemos el boton por el id personalizado una vez está en el DOM
//   let botonAgregar = document.getElementById(`boton${item.id}`);

//   //agregamos el evento al boton de agregar
//   botonAgregar.addEventListener("click", () => agregar(item.id));
// });

//////////////////////////////////////////////////////////////////////////////

const productos = [];
let contenedor = document.getElementById("contenedor");

const renderizado = (productos) => {
  contenedor.innerHTML = "";

  productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>Id: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;
    contenedor.append(div);
  });
};

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  let nombre = inputs[0].value;
  let precio = inputs[1].value;

  productos.push({ id: productos.length + 1, nombre, precio });
  renderizado(productos);
});
