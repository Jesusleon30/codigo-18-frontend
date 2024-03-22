


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


// - aumentando nueva propriedad al object celular
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


// buscando el atributo dentro el object el title
console.log(celular.title)
//'samsung'


// - vemos los keys dentro mi Object // ojo inicia con MAIUCULA Object sino no lo lee
Object.keys(celular);
// [ 'id', 'name', 'age', 'title', 'country', 'rete' ]


// - vemos los values dentro mi Object
Object.values(celular)
// [ 3, 'holamundo', 5, 'samsung', 'Peru', '5G' ]

// esto me convierte en un array cada keys y values
Object.entries(celular)
/* 
[
  [ 'id', 3 ],
  [ 'name', 'holamundo' ],
  [ 'age', 5 ],
  [ 'title', 'samsung' ],
  [ 'country', 'Peru' ],
  [ 'rete', '5G' ]
]
*/





// creamos un object con dentro otro object

const ipad = {
  id: 5,
  name: "mac",
  apple : {
    color:"blue",
    price: 1000,
  }
}

console.log(ipad)
/*
{
  id: 5,
  name: 'mac',
  apple: { color: 'blue', price: 1000 }
}
*/

// buscamos dentro el object ipad el object apple
console.log(ipad.apple)
// { color: 'blue', price: 1000 }

// buscamos mas especifico con el punto para escavar
console.log(ipad.apple.color)
// 'blue'



