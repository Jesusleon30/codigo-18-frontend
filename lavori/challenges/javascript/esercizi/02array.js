
// creamos un array llamado celulares 

const celulares = [
    {
    id:3,
    age:5,
    title:"samsung",
    country: "Peru",
    },
    {
    id:4,
    age:10,
    title:"lenovo",
    country: "italia",
    },
  ]
  

  celulares.map(function (celular) {
    console.log(celular)
  });
  /* 
  {
    id: 3,
    age: 5,
    title: 'samsung',
    country: 'Peru'
  }
  [ undefined, undefined ]
  {
    id: 4,
    age: 10,
    title: 'lenovo',
    country: 'italia'
  }
  */

// creamos una nueva variabile y llamamos a los title del newCelular
const newCelular = celulares.map(function (celular){
    console.log(celular.title)
  })
// 'samsung'
// 'lenovo'
 
console.log(typeof celulares)
// ' object '



for (let celular in celulares){
    console.log(celular)
  }
  // '0'
  // '1'



