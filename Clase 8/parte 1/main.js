let boton = document.getElementById("boton");

//SWEET ALERT
// boton.addEventListener("click", () => {
//   Swal.fire("Good job!", "You clicked the button!", "success");
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Do you want to continue?",
//     icon: "error",
//     confirmButtonText: "Cool",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Genial!",
//     text: "Haz clickeado el botón!",
//     icon: "success",
//     confirmButtonText: "Cool",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Error!",
//     text: "Error inesperado",
//     icon: "error",
//     confirmButtonText: " =( ",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     position: "center",
//     icon: "success",
//     title: "Your work has been saved",
//     showConfirmButton: false,
//     timer: 2000,
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Sweet!",
//     text: "Modal with a custom image.",
//     imageUrl: "https://unsplash.it/400/200",
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: "Custom image",
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Está seguro de eliminar el producto?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Sí, seguro",
//     cancelButtonText: "No, no quiero",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //codigo que necesitan
//       // localStorage.removeItem("carrito");

//       Swal.fire({
//         title: "Borrado!",
//         icon: "success",
//         text: "El archivo ha sido borrado",
//       });
//     }
//   });
// });

// boton.addEventListener("click", () => {
//   Swal.fire({
//     title: "Ingrese el producto a buscar",
//     input: "text",
//     showCancelButton: true,
//     confirmButtonText: "Buscar",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       //traer el storage y buscar el producto
//       Swal.fire({
//         title: `El valor ingresado es: ${result.value}`,
//       });
//     }
//   });
// });

//TOASTIFY
// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Producto agregado!",
//     duration: 3000,
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     style: {
//       background: "linear-gradient(to left, #00b09b, #96c92d)",
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Probando toast!",
//     duration: 3000,
//     onClick: () => {
//       Toastify({
//         text: "Clickeaste un Toast!",
//         duration: 1500,
//       }).showToast();
//     },
//   }).showToast();
// });

// boton.addEventListener("click", () => {
//   Toastify({
//     text: "Click aquí para ir a Coder!",
//     duration: 3000,
//     destination: "https://www.coderhouse.com",
//   }).showToast();
// });

//LUXON
// const DateTime = luxon.DateTime;

// const hoy = DateTime.local(2023, 11, 4);
// console.log(hoy.toString());
// console.log(hoy.year);
// console.log(hoy.month);
// console.log(hoy.day);
// console.log(hoy.second);
// console.log(hoy.weekday);
// console.log(hoy.zoneName);
// console.log(hoy.daysInMonth);
// console.log(hoy.toLocaleString());
// console.log(hoy.toLocaleString(DateTime.DATE_FULL));

// const now = DateTime.now();
// console.log(now.toLocaleString(DateTime.TIME_SIMPLE));
// console.log(now.setLocale('en').toLocaleString(DateTime.DATE_FULL));
// console.log(now.setLocale('es').toLocaleString(DateTime.DATE_FULL));

// console.log(now.toLocaleString(DateTime.DATETIME_SHORT));

// const suma = now.plus({ hours: 10, minutes: 10 });
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT));

// const resta = now.minus({ month: 2, days: 10 });
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT));

// const DateTime = luxon.DateTime;
// const Interval = luxon.Interval;

// const now = DateTime.now();
// console.log(now.toString());
// const navidad = DateTime.local(2023, 12, 24);
// const i = Interval.fromDateTimes(now, navidad);

// console.log(i.length("days"));
// console.log(i.length("hours"));
// console.log(i.length("minutes"));
