//Operador ++
// let numero = 5;
// numero = numero + 1;
// numero += 1;
// numero++;

//Operador ternario

/* 
estructura del operador ternario

condicion ? codigo cuando la condicion verdadera : codigo cuando la condicion es falsa;
*/

// let edad = 25;

// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }

// edad >= 18 ? saludar() : console.log("Eres menor de edad");

// let temperatura = 12;

// if (temperatura > 30) {
//   console.log("Día caluroso");
// } else {
//   console.log("Día agradable");
// }

// temperatura > 30 ? console.log("Día caluroso") : console.log("Día agradable");

// const usuario = {
//   nombre: "pepito",
//   edad: 50,
// };
// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("Puede entrar a la fiesta");
// } else {
//   console.log("No puede entrar a la fiesta");
// }

// const usuario = {
//   nombre: "pepito",
//   edad: 50,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("Puedes entrar a la fiesta") : console.log("No puedes entrar a la fiesta");;

//Operador Lógioo and y el or
/* 
valor1 && valor2 si valor1 es true entonces retorna valor2, en caso contrario retorna valor1
valor1 || valor2 si valor1 es true entonces retorna valor1, en caso contrario retorna valor2
*/

//&&
// const carrito = [];

// if (carrito.length === 0) {
//   console.log("Carrito vacío");
// }

// carrito.length === 0 && console.log("Carrito vacío");

// const usuario = {
//   nombre: "pepito",
//   edad: 10,
// };

// const registro = usuario.edad >= 18 && new Date();
// console.log(registro);

//||
// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //Hola Mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); //falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); // falsy

// const usuario = {
//   nobre: "andres",
//   edad: 26,
// };

// const usuario1 = null;

// console.log(usuario || "El usuario no existe");
// console.log(usuario1 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//Acceso condicional a un objeto
// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "andres",
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "la propiedad no existe");

//Desestructuración
// const usuario = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// const nombre = usuario.nombre;
// const edad = usuario.edad;
// const direccion = usuario.direccion;

// const { nombre, direccion, edad } = usuario;

// console.log(nombre);
// console.log(direccion);
// console.log(edad);

// const usuario = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
//   telefonos: {
//     casa: 1234,
//     trabajo: 5678,
//   },
// };

// const {
//   nombre,
//   telefonos: { casa },
// } = usuario;

// console.log(casa);

// const usuario = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
//   telefonos: {
//     casa: 1234,
//     trabajo: 5678,
//   },
// };

// const {
//   nombre: nombrePersona
// } = usuario;

// console.log(nombrePersona);

// const saludar = (persona) => {
//   const { nombre, edad } = persona;

//   console.log(`Hola ${nombre} tienes ${edad} de edad`);
// };

// saludar({
//   nombre: "pepito",
//   edad: 45,
// });

// const saludar = ({ nombre, edad }) => {
//   console.log(`Hola ${nombre} tienes ${edad} de edad`);
// };

// saludar({
//   nombre: "pepito",
//   edad: 45,
// });

const nombres = ["camila", "pepito", "andres", "juan"];
const [, , c] = nombres;

console.log(c);
