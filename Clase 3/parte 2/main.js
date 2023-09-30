// let nombre = "pepito";
// let edad = 45;
// let direccion = "AV";

/* 
estructura de un objeto

{clave1: valor1, clave2: valor2, ..., claven: valorn};
*/

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.direccion);

// console.log(persona["nombre"]);
// console.log(persona["edad"]);
// console.log(persona["direccion"]);

// let clave = prompt("Ingrese la propiedad que quiere ver del usuario");
// alert(persona[clave]);

// const persona = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// persona.nombre = "pepita";
// persona["edad"] = 50;
// persona.madre = "juanita";
// persona["padre"] = "pedrito";

// console.log(persona);

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("pepita", 50, "AV");

// console.log(persona1.nombre);
// console.log(persona2.nombre);

// function Persona(info) {
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
//   this.altura = info.altura;
//   this.peso = info.peso;
// }

// const persona1 = new Persona({
//   peso: 85,
//   nombre: "pepito",
//   direccion: "AV",
//   altura: 180,
//   edad: 45,
// });

// function Persona(nombre, edad, direccion){
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
// }

// const persona1 = new Persona("pepito", 45, "AV");

// console.log("afasdf" in persona1);

// for(const clave in persona1){
//   console.log(clave);
//   console.log("Valor asociado", persona1[clave]);
// }

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// const persona1 = new Persona("pepito", 45, "AV");
// persona1.hablar();

//CLASES

// function Persona(nombre, edad, direccion) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.direccion = direccion;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// class Persona {
//   constructor(nombre, edad, direccion) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("pepito", 45, "AV");
// persona1.hablar();

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//   }
// }

// const producto1 = new Producto(
//   "Monitor Ultrawide LG 34 Ips Hrd10 Freesync",
//   1553900,
//   "http: a;sldkfjasdlkj"
// );

// const producto2 = new Producto(
//   "RECOMENDADO 27 Monitor Curvo Fhd 1800r Con Diseño Sin",
//   742561,
//   "http: a;asdf"
// );

// class Producto {
//   constructor(nombre, precio, imagen) {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.imagen = imagen;
//     this.vendido = false;
//   }

//   vender() {
//     this.vendido = true;
//   }
// }

// const producto1 = new Producto(
//   "Monitor Ultrawide LG 34 Ips Hrd10 Freesync",
//   1553900,
//   "http: a;sldkfjasdlkj"
// );

// console.log(producto1);
// producto1.vender();
// console.log(producto1);

class Producto {
  constructor(nombre, precio, imagen, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.imagen = imagen;
    this.cantidad = cantidad;
  }

  vender() {
    this.cantidad -= 1; // this.cantidad = this.cantidad - 1
  }
}

const producto1 = new Producto(
  "Monitor Ultrawide LG 34 Ips Hrd10 Freesync",
  1553900,
  "http: a;sldkfjasdlkj",
  5
);

const producto2 = new Producto(
  "RECOMENDADO 27 Monitor Curvo Fhd 1800r Con Diseño Sin",
  742561,
  "http: a;asdf",
  5
);

console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);
console.log(producto2);

