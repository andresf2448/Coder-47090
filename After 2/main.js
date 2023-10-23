// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "pantalon", precio: 700 },
// ];

// localStorage.setItem("productos", JSON.stringify(productos));

// const agregarProducto = (nombre, precio) => {
//   //traer del storage
//   let productosJson = localStorage.getItem("productos");
//   let productos = JSON.parse(productosJson);

//   //administrar el arreglo
//   let producto = {
//     id: productos.length + 1,
//     nombre,
//     precio,
//   };

//   productos.push(producto);

//   //actualizar en el storage
//   localStorage.setItem("productos", JSON.stringify(productos));
// };

// let nombre = prompt("Ingrese el nombre");
// let precio = Number(prompt("Ingrese el precio"));

// agregarProducto(nombre, precio);

// const eliminarProducto = (id) => {
//   let productosJson = localStorage.getItem("productos");
//   let productos = JSON.parse(productosJson);

//   let filtrados = productos.filter((item) => item.id != id);

//   localStorage.setItem("productos", JSON.stringify(filtrados));
// };

// let id = Number(prompt("Ingrese el id del producto a eliminar"));
// eliminarProducto(id);

//crear una función que pida el id y modifique su precio

const modificarPrecio = (id, precio) => {
  let productoStorage = localStorage.getItem("productos");
  let productos = JSON.parse(productoStorage);

  let producto = productos.find((item) => item.id === id);
  producto.precio = precio;

  localStorage.setItem("productos", JSON.stringify(productos));
};

let id = Number(prompt("Ingrese el id del producto a modificar su precio"));
let precio = Number(prompt("Ingrese el nuevo precio"));
modificarPrecio(id, precio);
