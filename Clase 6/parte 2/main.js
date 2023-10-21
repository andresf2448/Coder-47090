//localStorage
// console.log(localStorage);

//agregar elementos al storage
// el localStorage persiste la información cuando se recarga la página, cuando cierras la página, cuando reinicias o apagas el computador
// localStorage.setItem("nombre", "andres");
// localStorage.setItem("numero", 5);
// localStorage.setItem("valor", "true");
// localStorage.setItem("objeto", { nombre: "andres", edad: 70 });
// localStorage.setItem("arreglo", [4, 5, 5, 67, 8]);

//localStorage.setItem("numero", 8);

//obtener valores del storage
// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

// for(let i = 0; i < localStorage.length; i++){
//   let clave = localStorage.key(i);
//   console.log(clave);
//   console.log("el valor asociado: ", localStorage.getItem(clave));
// }

//eliminar elementos del storage
// localStorage.removeItem("objeto"); //elimina por la clave objeto
// localStorage.clear(); //elimina todo el storage

//sessionStorage
//solo guarda la información cuando se recarga la página
// console.log(sessionStorage);

// sessionStorage.setItem("nombre", "pedrito");
// sessionStorage.setItem("valor", true);
// sessionStorage.setItem("numero", 7);

// let nombre = sessionStorage.getItem("nombre");
// let valor = sessionStorage.getItem("valor");
// let numero = sessionStorage.getItem("numero");

// console.log(nombre);
// console.log(valor);
// console.log(numero);

// for(let i = 0; i < sessionStorage.length; i++){
//   let clave = sessionStorage.key(i);
//   console.log(clave);
//   console.log("el valor asociado: ", sessionStorage.getItem(clave));
// }

// sessionStorage.removeItem("objeto"); //elimina por la clave objeto
// sessionStorage.clear(); //elimina todo el storage

// const objetoGuardar = { nombre: "juan" };
// localStorage.setItem("objeto", objetoGuardar);
// let objeto = localStorage.getItem("objeto");
// console.log(objeto);

//JSON.stringfy(elemento) => dar formato de json al elemento
//JSON.parse(elemento) => quitar formato json al elemento

// let objeto = { nombre: "juan", edad: 45 };
// console.log(typeof(objeto));
// console.log(JSON.stringify(objeto));
// console.log(typeof(JSON.stringify(objeto)));

// let arreglo = [4, 5, 6, 7];
// console.log(arreglo);
// console.log(JSON.stringify(arreglo));

// let objeto = { nombre: "juan", edad: 45 };
// localStorage.setItem("objeto", JSON.stringify(objeto));

// let arreglo = [4, 5, 56, 78];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = localStorage.getItem("objeto");
// console.log(JSON.parse(objeto));

// let arreglo = localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 350 },
//   { id: 4, nombre: "media", precio: 470 },
// ];

// const guardarStorage = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// };

// productos.forEach(producto => {
//   guardarStorage(producto.id, JSON.stringify(producto))
// })

// localStorage.setItem("carrito", JSON.stringify(productos));
// let carrito = JSON.parse(localStorage.getItem("carrito"));
// console.log(carrito);

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenido nuevamente ${usuario}`);
// } else {
//   usuario = prompt("Ingrese su usuario");
//   alert(`Bienvenido por primera vez ${usuario}`);
//   sessionStorage.setItem("usuario", usuario);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "gorra", precio: 700 },
//   { id: 3, nombre: "zapato", precio: 350 },
//   { id: 4, nombre: "media", precio: 470 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

//mle traigo el boton que va a eliminar el carrito
let eliminar = document.getElementById("eliminar");
let carrito;

//traigo los datos del carrito del storage
let carritoStorage = localStorage.getItem("carrito");

//si hay carrito lo seteamos si no el carrito es vacío y mostramos mensaje
if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  carrito = [];
  let div = document.createElement("div");
  div.innerHTML = "Carrito vacío";
  document.body.append(div);
}

//recorremos el carrito
carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
  `;

  document.body.append(div);
});

//agregamos el evento de click para que el boton eliminar haga su trabajo
eliminar.addEventListener("click", () => {
  alert("Carrito eliminado");
  localStorage.clear();
  location.reload();
});
