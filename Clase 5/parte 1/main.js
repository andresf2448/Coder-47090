//OBJETO MATH

//constantes
// console.log(Math.E);
// console.log(Math.PI);

//propiedades matemáticas
// console.log(Math.max(4, 5, 67, 8, 564, 32, 34, 52367, 86, 653, 2)); //obtener el máximo de los números
// console.log(Math.min(4, 5, 67, 8, 564, 32, 34, 52367, 86, 653, 2)); //obtener el mínimo de los números

// console.log(Math.max(4, 5, 67, 8, 564, 32, Infinity, 34, 52367, 86, 653, 2)); //obtener el máximo de los números
// console.log(Math.min(4, 5, 67, 8, 564, 32, 34, -Infinity, 52367, 86, 653, 2)); //obtener el mínimo de los números

//redondeos aproximaciones
// console.log(Math.ceil(3.14)); //redondea hacia el entero más cercano hacia arriba
// console.log(Math.floor(4.8)); //redondea hacia el entero m;as cercano hacia abajo
// console.log(Math.round(3.7));
// console.log(Math.round(3.1)); //redondea al entero más cercano
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(2));
// console.log(Math.sqrt(1));
// console.log(Math.sqrt(-1));

//Números aleatorios
//números entreo 0 y 1
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());

//números entre 0 y 10, enteros
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));
// console.log(Math.round(Math.random() * 10));

//números entre 7 y 17
// console.log(Math.round(Math.random() * 10) + 7);
// console.log(Math.round(Math.random() * 10) + 7);
// console.log(Math.round(Math.random() * 10) + 7);
// console.log(Math.round(Math.random() * 10) + 7);
// console.log(Math.round(Math.random() * 10) + 7);

/* 
FÓRMULA

Math.round(Math.random() * rango + desplazamiento);
*/

// const generarAleatorio = (rango, desplazamiento) => {
//   return Math.floor(Math.random() * rango + desplazamiento);
// };

//Números aleatorios entre 17 y 40
// console.log(generarAleatorio(23, 17));
// console.log(generarAleatorio(23, 17));
// console.log(generarAleatorio(23, 17));
// console.log(generarAleatorio(23, 17));
// console.log(generarAleatorio(23, 17));

// //Números aleatorios entre 23 y 57
// console.log(generarAleatorio(34, 23));
// console.log(generarAleatorio(34, 23));
// console.log(generarAleatorio(34, 23));
// console.log(generarAleatorio(34, 23));
// console.log(generarAleatorio(34, 23));

//Dado un arreglo nombres, generar un función que devuelva nombres aleatorios
// const nombres = [
//   "juanita",
//   "camila",
//   "sofia",
//   "pedrito",
//   "carlitos",
//   "mariana",
// ];

// const generarNombre = () => {
//   //generamos la posición del elemento del arreglo de manera aleatoria
//   let index = Math.floor(Math.random() * nombres.length);

//   return nombres[index];
// };

// console.log(generarNombre());
// console.log(generarNombre());
// console.log(generarNombre());
// console.log(generarNombre());
// console.log(generarNombre());
// console.log(generarNombre());

//CLASE DATE
// console.log(Date());
// console.log(new Date(2023, 9, 14));
// const navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad);

// const navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad);

//FORMATOS
// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());

//Conseguir datos particulares
// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());
// console.log(navidad.getDay());

const navidad = new Date("December 25, 2023");
const hoy = new Date("October 14, 2023");

console.log(navidad - hoy);

const milisegundosDia = 86400000;

console.log((navidad - hoy) / milisegundosDia);
