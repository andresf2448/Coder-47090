// let boton = document.getElementById("boton");

// const respuesta = () => {
//   alert("Diste un click");
// };

//primera forma para asignar un evento
//se pasa la declaración de la función no la ejecución
// boton.addEventListener("click", respuesta);

//segunda forma para asignar un evento
// boton.onclick = respuesta;

// let evento = prompt("Ingrese el nombre del evento deseado");
// boton.addEventListener(evento, respuesta);

// const respuesta = (nombre) => {
//   alert(`Hola ${nombre}`);
// };

// let nombre = prompt("Ingrese el nombre");
// boton.addEventListener("click", () => respuesta(nombre));

// boton.addEventListener("click", () => {
//código a realizar por la función
// })

//EVENTOS MÁS COMUNES
//EVENTOS DEL MOUSE

// let boton = document.getElementById("boton");

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));
// boton.addEventListener("dblclick", () => console.log("dblclick"));

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("click", () => console.log("click"));

// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("mousedown", () => {
//   saludo.className = "rojo";
// });

// boton.addEventListener("mouseup", () => {
//   saludo.className = "verde";
// });

// boton.addEventListener("mouseover", () => {
//   saludo.className = "azul";
// });

// boton.addEventListener("mouseout", () => {
//   saludo.className = "amarillo";
// });

//EVENTOS DEL TECLADO
// let nombre = document.getElementById("nombre");
// let saludo = document.getElementById("saludo");

// nombre.addEventListener("keydown", () => console.log("keydown"));
// nombre.addEventListener("keyup", () => console.log("keyup"));

// nombre.addEventListener("keyup", (e) => {
//   if (e.key === "a") {
//     saludo.className = "rojo";
//   } else if (e.key === "s") {
//     saludo.className = "verde";
//   } else if (e.key === "d") {
//     saludo.className = "azul";
//   } else {
//     saludo.className = "amarillo";
//   }
// });

// nombre.addEventListener("keyup", (e) => {
//   if (!e.key.includes("@")) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

// nombre.addEventListener("input", () => {
//   console.log(nombre.value);
// });

// nombre.addEventListener("input", () => {
//   // if (!nombre.value.includes("@")) {
//   //   saludo.className = "rojo";
//   // } else {
//   //   saludo.className = "blanco";
//   // }

//   if (nombre.value.length < 5) {
//     saludo.className = "rojo";
//   } else {
//     saludo.className = "blanco";
//   }
// });

// nombre.addEventListener("change", () => console.log("change"))

//FORMULARIOS
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;
  // console.log(inputs[0].value);
  // console.log(inputs[1].value);

  if (!inputs[0].value.includes("@")) {
    // inputs[0].value = "";
    alert("no incluye en @");
  }
});
