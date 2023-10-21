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