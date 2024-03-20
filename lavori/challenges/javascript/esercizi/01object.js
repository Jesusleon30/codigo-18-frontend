


// creamos un object llamado celular 

const celular = {
  id:3,
  name:"holamundo",
  //  keys : values
  age:5,
  title:"samsung",
  country: "Peru",
  }

// - tipo de variable
console.log(typeof celular)
// 'object'

// vemos dentro el object  celular
console.log(celular)
/*
{
  id: 3,
  name: 'holamundo',
  age: 5,
  title: 'samsung',
  country: 'Peru'
}
*/


// - aumentando nueva propriedades
celular.rete="5G"
// '5G'
console.log(celular)
/*
{
  id: 3,
  name: 'holamundo',
  age: 5,
  title: 'samsung',
  country: 'Peru',
  rete: '5G'
}
*/

console.log(celular.title)
//'samsung'

// - vemos los keys dentro mi Object
Object.keys(celular);
// [ 'id', 'name', 'age', 'title', 'country', 'rete' ]

// - vemos los values dentro mi Object
Object.values(celular)
// [ 3, 'holamundo', 5, 'samsung', 'Peru', '5G' ]






