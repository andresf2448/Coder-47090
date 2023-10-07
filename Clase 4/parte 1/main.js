// /* 
// estructura de un arreglo

// [valor0, valor1, valor2, ..., valorn];
// */

// // const vacio = [];
// // const numeros = [4, 3, 5, 6, 8];
// // const nombres = ["camila", "andres", "pepito"];
// // const valores = [true, false, false, true];
// // const variados = [4, "camila", true];

// // console.log(nombres[0]);
// // console.log(nombres[2]);
// // console.log(nombres[1]);

// // let resultado = numeros[2] + numeros[4];
// // console.log(resultado);

// // const nombres = ["camila", "andres", "pepito", "pepita", "juan"];

// // for (let index = 0; index < nombres.length; index++) {
// //   console.log(nombres[index]);
// // }

// //Métodos y propiedades fundamentales

// //length dar la longitud o cantidad de elementos del arreglo

// //push agrega un elemento al final del arreglo
// // const nombres = ["camila", "andres", "pepito"];

// // nombres.push("juanito");
// // console.log(nombres);

// // //unshift agrega un elemento al inicio del arreglo
// // nombres.unshift("juanita");
// // console.log(nombres);

// // //pop saca un elemento del final del arreglo
// // nombres.pop();
// // console.log(nombres);

// // //shift saca un elemento del inicio del arreglo
// // nombres.shift();
// // console.log(nombres);

// // const nombres = ["camila", "andres", "pepito", "juanita", "pedrito"];

// //splice permite elminar uno o varios elementos en cualquier posición
// // nombres.splice(1, 3); //el primer parámetro es donde me posiciono y el segundo cuántos quiero eliminar
// // console.log(nombres);

// //join unir en un solo string todos los elementos del arreglo separados por el parámetro
// // console.log(nombres.join("****"));

// //concat une en un único arreglo los dos arreglos
// // const mascotas = ["firu", "max"];

// // const variados = mascotas.concat(nombres);
// // console.log(variados);

// //slice realiza una copia de un fragmento del arreglo
// // const nombres = ["camila", "andres", "pepito", "juanita", "pedrito"];

// // const copia = nombres.slice(1, 4);
// // console.log(copia);

// //indexOf me devuelve la posición de un elemento y si no lo encuentra devuelve -1
// // console.log(nombres.indexOf("juanita"));
// // console.log(nombres.indexOf("carlitos"));

// //includes me dice si un elemento está o no en el arreglo
// // console.log(nombres.includes("pepito"));
// // console.log(nombres.includes("carlitos"));

// // const productos = ["camisa", "pantalon", "zapato"];

// // let nombre = prompt("Ingrese el nombre del producto a saber su disponibilidad");

// // if (productos.includes(nombre)) {
// //   alert("El producto está disponible");
// // } else {
// //   alert("El producto no está disponible");
// // }

// // const productos = ["camisa", "pantalon", "zapato"];

// // productos.reverse();
// // console.log(productos);

// // const productos = ["camisa", "pantalon", "zapato", "media"];

// // const eliminarPorNombre = (nombre) => {
// //   let index = productos.indexOf(nombre);

// //   if (index != -1) {
// //     productos.splice(index, 1);
// //     console.log(productos);
// //   }
// // };

// // eliminarPorNombre("media");

// //Arreglos con objetos
// // const productos = [
// //   { id: 1, nombre: "camisa", precio: 1000 },
// //   { id: 2, nombre: "zapato", precio: 1000 },
// //   { id: 3, nombre: "media", precio: 1000 },
// //   { id: 4, nombre: "gorra", precio: 1000 },
// // ];

// // for(const producto of productos){
// //   console.log(producto.nombre);
// //   console.log(producto.precio);

// //   console.log("---------------------------");
// // }

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }
// }

// const productos = [];

// productos.push(new Producto("camisa", 1234));
// productos.push(new Producto("gorra", 1234));
// productos.push(new Producto("pantalon", 1234));
// productos.push(new Producto("media", 1234));

// console.log(productos);