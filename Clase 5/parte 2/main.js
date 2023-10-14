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
