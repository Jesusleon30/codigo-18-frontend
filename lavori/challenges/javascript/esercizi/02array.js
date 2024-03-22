// creamos un array llamado celulares

const celulares = [
  {
    id: 3,
    age: 5,
    title: "samsung",
    country: "Peru",
  },
  {
    id: 4,
    age: 10,
    title: "lenovo",
    country: "italia",
  },
];

// esta mal esto:
celulares.map(function (celular) {
  // se deve crear un nuevo array (variable) siempre
  console.log(celular); // se usa return(celular)
});
/* 
  {
    id: 3,
    age: 5,
    title: 'samsung',
    country: 'Peru'
  }
  [ undefined, undefined ] // xk sale esto?
  {
    id: 4,
    age: 10,
    title: 'lenovo',
    country: 'italia'
  }
  */

// recordar el map se guarda siempre un en nuevo array y se mete return y no console.log

// creamos una nueva variabile y llamamos a los title del newCelular
const newCelular = celulares.map(function (celular) {
  console.log(celular);
});
/*
{
  id: 3,
  age: 5,
  title: 'samsung',
  country: 'Peru'
}
{
  id: 4,
  age: 10,
  title: 'lenovo',
  country: 'italia'
}

*/

// llamamos la variable sin poner const xk gia esta definido sino nos sale error
newCelular = celulares.map(function (celular) {
  console.log(celular.title);
});
// 'samsung'
// 'lenovo'

console.log(typeof celulares);
// ' object '

// for in
// nos da los indices de un array
for (let celular in celulares) {
  console.log(celular);
}
// '0'
// '1'

// for of
// la variable let celular va a tomar cada elemento de mi lista de forma automatica
for (let celular of celulares) {
  console.log(celular);
}
/*
  {
    id: 3,
    age: 5,
    title: 'samsung',
    country: 'Peru'
  }
  {
    id: 4,
    age: 10,
    title: 'lenovo',
    country: 'italia'
  }
  */

const numbers = [100, 20, 23, 54, 57, 12];

// nos da los elementos del array el valor
// let number puede llamarse como uno quiera este va a tomar
//cada elemento de mi lista de forma automatica
for (let number of numbers) {
  console.log(number);
}

/* 
  100 
  20
  23
  54
  57
  12
  */

// nos da  los indices del array
for (let number in numbers) {
  console.log(number);
}
/*
  '0'
  '1'
  '2'
  '3'
  '4'
  '5'
  */
