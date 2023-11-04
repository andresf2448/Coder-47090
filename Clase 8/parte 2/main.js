//setTiemout(funcion, tiempo);

// setTimeout(() => {
//   console.log("Hola");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 2000);

// console.log("Final");

// let boton = document.getElementById("boton");
// let saludo = document.getElementById("saludo");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 3000);
// });

// for(let letra of "hola"){
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000)
// }

// for(let letra of "mundo"){
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000)
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// function multiply(x, y) {
//   return x * y;
// }

// function printSquare(x) {
//   let resultado = multiply(x, x);
//   console.log(resultado);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

//setInterval(funcion, tiempo);

// setInterval(() => {
//   console.log("Hola");
// }, 1000)

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

/* 
Estructura de una promesa

new Promise((resolve, reject) => {
  cuerpo de la promesa
});
*/

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     // if (valor) {
//     //   resolve("Promesa resuelta");
//     // } else {
//     //   reject("Promesa rechazada");
//     // }

//     setTimeout(() => {
//       valor
//         ? resolve(["andres", "camila", "pepito"])
//         : reject("Promesa rechazada");
//     }, 1000);
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso finalizado"));

///////////////////////////////////////////////////////////// El SERVIDOR
const BD = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1000 },
  { id: 3, nombre: "gorra", precio: 1000 },
  { id: 4, nombre: "pantalon", precio: 1000 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(BD);
      // reject("No fue posible la conexión");
    }, 3000);
  });
};
////////////////////////////////////////////////////////////

traerProductos()
  .then((response) => {
    response.forEach((item) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h1>ID ${item.id}</h1>
        <p>Nombre: ${item.nombre}</p>
        <b>$${item.precio}</b>
      `;

      document.body.append(div);
    });
  })
  .catch((error) => {
    let div = document.createElement("div");
    div.innerHTML = `Intente luego! (${error})`;
    document.body.append(div);
  }).finally(() => {
    let div = document.createElement("div");
    div.innerHTML = `Proceso finalizado`;
    document.body.append(div);
  }) 
