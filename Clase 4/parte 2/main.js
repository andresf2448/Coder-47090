// function mayorQue(n) {
//   return (m) => m > n
// }

// let mayorQueCinco = mayorQue(5); // (m) => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(4));

// let mayorQueDiez = mayorQue(10); //(m) => m > 10
// console.log(mayorQueDiez(20));

// function operacionesBasicas(operacion) {
//   if (operacion === "sumar") {
//     return (a, b) => a + b;
//   }

//   if (operacion === "restar") {
//     return (a, b) => a - b;
//   }

//   if (operacion === "multiplicar") {
//     return (a, b) => a * b;
//   }

//   if (operacion === "dividir") {
//     return (a, b) => a / b;
//   }
// }

// let suma = operacionesBasicas("sumar"); //(a, b) => a + b;

// console.log(suma(10, 15));
// let resta = operacionesBasicas("restar"); //(a, b) => a - b;

// console.log(resta(6, 5));
// function sumar(numero) {
//   console.log(numero + 1);
// }

// function iterador(arreglo, funcion) {
//   for (const numero of arreglo) {
//     sumar(numero);
//   }
// }

// iterador([3, 4, 5, 6, 7], sumar);

//Métodos de búsqueda y transformación de los arreglos
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "pantalon", precio: 1500 },
// ];

//forEach recorre el arreglo

// productos.forEach(item => {
//   console.log(item.nombre);
//   console.log(item.precio);
// });

//find encontrar el primer elemento del arreglo que cumpla la condicion dada
// let nombre = prompt("Ingrese el nombre del producto a ver su descripción");

// let encontrado = productos.find((item) => item.nombre === nombre);

// if (encontrado) {
//   alert(`
//     Id: ${encontrado.id}
//     Nombre: ${encontrado.nombre}
//     $${encontrado.precio}
//   `);
// } else {
//   alert("Producto no encontrado");
// }

//filter filtrar los elementos que cumplan la condición dada

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "pantalon", precio: 1500 },
// ];

// let precio = Number(prompt("Ingrese el precio mínimo"));
// let filtrados = productos.filter((item) => item.precio > precio);

// filtrados.forEach((item) => {
//   alert(`
//     Id: ${item.id}
//     Nombre: ${item.nombre}
//     $${item.precio}
//   `);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "pantalon", precio: 1500 },
// ];
//some verifica si al menos un elemento del arreglo cumple la condición
// console.log(productos.some(item => item.nombre === "asdfasdf"));

//map modifica o transforma los elementos del arreglo
// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const descuentos = productos.map(item => {
//   return {
//     id: item.id,
//     nombre: item.nombre,
//     precio: item.precio - item.precio * 0.21
//   }
// })

// console.log(descuentos);

//reduce reduce el arreglo a un único valor
// const numeros = [5, 6, 7, 8, 9];

// let total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 700 },
//   { id: 3, nombre: "gorra", precio: 300 },
//   { id: 4, nombre: "pantalon", precio: 1500 },
// ];

// let total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

//sort ordena el arreglo
// const numeros = [3, 4, 5, 6, 7];

// console.log(numeros.sort((a, b) => a - b));
// console.log(numeros.sort((a, b) => b - a));

// const items = [
//   { name: "Pikachu", price: 21 },
//   { name: "Charmander", price: 37 },
//   { name: "Pidgey", price: 45 },
//   { name: "Squirtle", price: 60 },
// ];

// console.log(
//   items.sort((a, b) => {
//     if (a.name > b.name) {
//       return -1;
//     }
//     if (a.name < b.name) {
//       return 1;
//     }
//     // a es igual a b
//     return 0;
//   })
// );

//forEach, find, filter, map