//Acceso al DOM

//CÓMO ACCEDER AL DOM
//getElementById(id);
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName(clase);
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

//getElementsByTagName(tag);
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

//Modificación del DOM
// let saludo = document.getElementById("saludo");
// saludo.innerHTML = "Hola a Coder";

// let saludo = document.getElementById("saludo");
// let nombre = prompt("Ingrese su nombre");
// let seccion = prompt("Ingrese la sección");

// if (seccion === "carrito") {
//   saludo.innerHTML = `Bienvenid@ ${nombre} al carrito`;
//   saludo.className = "azul";
// } else if (seccion === `favoritos`) {
//   saludo.innerHTML = `Bienvenid@ ${nombre} a los favoritos`;
//   saludo.className = "amarillo";
// } else {
//   saludo.innerHTML = `Bienvenid@ ${nombre} a nuestra super página`;
//   saludo.className = "verde";
// }

// let tema = prompt("Ingrese el tema");

// if (tema === "dark") {
//   document.body.className = "negro";
// }else{
//   document.body.className = "azul";
// }

//CREACIÓN DE NODOS
//creación de la etiqueta
// let parrafo = document.createElement("p");

//asignación de contenido
// parrafo.innerHTML = "<h1>Hola a todos</h1>";

//asingación de un padre
//1 forma en el body
// document.body.append(parrafo);

//2 forma en un contendor creado en el html
// let contenedor = document.getElementById("contenedor");
// contenedor.append(parrafo);

//ELIMINAR UN NODO
// let saludo = document.getElementById("saludo");
// saludo.remove();

// let nombres = ["camisa", "gorra", "media"];

// let lista = document.getElementById("lista");

// nombres.forEach((item) => {
//   const li = document.createElement("li");
//   li.innerHTML = item;
//   lista.append(li);
// });

// const mostrarProducto = (producto) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${producto.id}</h2>
//     <p>Nombre: ${producto.nombre}</p>
//     <b>$${producto.precio}</b>
//     <hr />
//   `;
//   document.body.append(div);
// };

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 1000 },
//   { id: 3, nombre: "zapato", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// productos.forEach((producto) => {
//   mostrarProducto(producto);
// });

// let cabanas = [
//   { nombre: "cabana1", disponibilidad: ["enero 5", "febrero 20"] },
//   { nombre: "cabana2", disponibilidad: ["enero 5", "marzo 20"] },
// ];

// let nombre = prompt("Ingrese la cabaña que quieres solicitar disponibilidad");

// let disponiblidad = cabanas.find(
//   (item) => item.nombre === nombre
// ).disponibilidad;

// disponiblidad.forEach((item) => {
//   alert(item);
// });
