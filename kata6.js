//! 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
// for (i = 0; i <= 9; i++) {
//   console.log(i)
// }
//! 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo cuando el resto del numero dividido entre 2 sea 0.
// for (i = 0; i <= 9; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }

//! 1.3 Crea un bucle para conseguir dormir contando ovejas. Este bucle tiene que dar 10 vueltas, es decir, 10 console.log. Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle y cambia el mensaje en la décima vuelta a 'Dormido!'.

for (i = 0; i <= 10; i++) {
  if (i !== 10) {
    console.log('Intentando dormir 🐑')
  } else {
    console.log('Dormido!')
  }
}
