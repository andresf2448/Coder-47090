let boton = document.getElementById("boton");

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

const respuesta = (nombre) => {
  alert(`Hola ${nombre}`);
};

let nombre = prompt("Ingrese el nombre");
boton.addEventListener("click", () => respuesta(nombre));