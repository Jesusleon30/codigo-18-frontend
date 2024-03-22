

// en javascript el  object { }  es un conjunto de atributos   


const person = {

  // atributos referente al object
  id: 1,
  //keys (llaves) :  values (valores) de tipo number
  name: "Pepe",
   //keys (llaves) :  values (valores) de tipo string
  lastname: "Perez",
  hasCar: true,
  //keys (llaves) :  values (valores) de tipo booleano

  // dentro del object tengo otro object ejemplo car:{}
  car: {
    brand: "Astor Martin",
    price: 9999.0,
    color: {
      variant: "neutro",
      hex: "#0000",
    },
  },
};

// agregando una propiedad dentro el object
person.address = "av mi casa siempre viva 123";
//  agregando en otro modo una propriedad dentro el object
person["age"] = 99;

console.log (person) 
/*
{
  id: 1,
  name: 'Pepe',
  lastname: 'Perez',
  hasCar: true,
  car: {
    brand: 'Astor Martin',
    price: 9999,
    color: { variant: 'neutro', hex: '#0000' }
  },
  address: 'av mi casa siempre viva 123',
  age: 99
}
*/



// llamar el object dentro otro object
console.log(person.car)
/* 
{
  brand: 'Astor Martin',
  price: 9999,
  color: { variant: 'neutro', hex: '#0000' }
}
*/




console.log("color", person.car.color.hex);
// '#0000'

console.log("color", person["car"]["color"]["hex"]);
// '#0000'


console.log(person.name); // busca el atributo dentro el object
// "pepe"
console.log(person["name"]);
//"pepe"
console.log(person.hasPhone); // si no existe la propiedad retorna undefined
// undefined








/*  -----     arrays (arreglos)   -------  */

// dentro el array hay un conjunto de elementos 


const alumnos = ["Pepe", "Maria", "Juan", "Luisa"];

const anyData = [1, true, { id: 1 }, "Hola", Symbol("foo")];
// dentro el array podemos poner qualquier tipo de dato

console.log(typeof anyData);
// object

console.log(typeof person);
// object

const person2 = {
  id: 1,
  name: "Pepe",
  lastname: "Perez",
  hasCar: true,
  car: {
    brand: "Astor Martin",
    price: 9999.0,
    color: {
      variant: "neutro",
      hex: "#0000",
    },
  },
};


console.log(person.length) //  esto no es posible 
// undefined




/*  clase object tiene el .keys y .values */

// me va a dar los key de mi object de mi array 
Object.keys(person2.car);
// ojo se escrive la O con maiuscula di Object
// [ 'brand', 'price', 'color' ]

Object.keys(person2.car.color);
// [ 'variant', 'hex' ]


// esto me va dar los valores de object en un array

// de este modo si voy a poder usar el  .length 
Object.values(person2).length;
//5

Object.entries(person2).length;
// 5

Object.entries(person2)
// cada atributo keys y values se convierte en un array
/*
[
  [ 'id', 1 ],
  [ 'name', 'Pepe' ],
  [ 'lastname', 'Perez' ],
  [ 'hasCar', true ],
  [
    'car',
    {
      brand: 'Astor Martin',
      price: 9999,
      color: { variant: 'neutro', hex: '#0000' }
    }
  ]
]
*/




/*   ---- dentro un array poniendo object ------  */

// cuando creamos un object es recomendable de usar los mismo keys asi 
// se puede modificar en futuro llamando uno solo


// estamos creando una lista de libros
const books = [
  {
    id: 1,
    title: "1984",
    country: "UK",
    pages: 328,
    isbn: "9780451524935",
  },
  {
    id: 2,
    title: "hamlet",
    country: "Denmark",
    pages: 342,
    isbn: "9780743477123",
  },
];





// for (let i=0; i < 12;i++)

/*
Formas de iterar un arreglo

for of
for in
*/

const numbers = [100, 20, 23, 54, 57, 12];


// forma mas larga
// for (let i=0; i<numbers.length;i++) {
//   console.log(numbers[i])
// }


// nos da los elementos del array el valor
for (let number of numbers)
 // let number puede llamarse como uno quiera este va a tomar 
  //cada elemento de mi lista de forma automatica 
 {
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


// forma mas rapida nos da los elementos 
function forOfExample() {
  for (let number of numbers){
    console.log(number);
  }
}



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


function forInExample() {
  for (let number in numbers) {
    console.log(number);
  }
}






// Quiero una funcion que me retorne el cuadrado de cada numero del arreglo numbers

function powSquareNumbers() {
  const newNumbers = [];

  for (let number of numbers) {
    const result = number * number;
    newNumbers.push(result); // esto nos da un array pero con los numeros al quadrado
  }

  return newNumbers;
}

powSquareNumbers(); // esto nos da un array pero con los numeros al quadrado
// [ 10000, 400, 529, 2916, 3249, 144 ]




// otra manera de escrivir codigo: 

// map lo que hacer es iterar y retornar un array
// .map se usa solo para los array si esk fuera un string o altro no seria posible

function powSquareNumbersMap() {
  const newNumber = numbers.map(function (number) {
    return number * number;
  });

  return newNumber;
}

powSquareNumbersMap();
// [ 10000, 400, 529, 2916, 3249, 144 ]




// copia de arriva 
const books = [
  {
    id: 1,
    title: "1984",
    country: "UK",
    pages: 328,
    isbn: "9780451524935",
  },
  {
    id: 2,
    title: "hamlet",
    country: "Denmark",
    pages: 342,
    isbn: "9780743477123",
  },
];



// queremos agregar la propiedad imagen a books
// books: es la lista que esta arriba
const newBooks = books.map(function (book) {   
  return {                                     
    id: book.id,                               
    title: book.title,
    country: book.country,
    isbn10: book.isbn,
    image: "https://img....",
  };
});

console.log(newBooks);


/* 
books.map (dentro la parentesi map recive una funcion (parametro ))
dentro la function ( dentro la parentesi de la function tiene el parametro)
el parametro vendria hacer cada elemento de forma individual  osea un  book (dentro el array)
osea un libro individual de los books 
en la primera vuelta valdra el indice osea 0 
en la segunda vuelta valdra el numero 1 e cosi via...
*/

// en todos los lenguagues siempre inician de zero.


 esempio:

const newBooks = books.map(function (book) {   
  console.log(book.country)
});
// 'UK'
//'Denmark'


// newBooks es una nueva variabile 
const newBooks = books.map(function (book) {   
  return {
    id:book.id,
    title:book.title,
    country: book.country,
    isbn10: book.isbn
    // y asi le podemos aumentar nuevas propriedades 
  }
});

console.log(newBooks)
/* 
[
  {
    id: 1,
    title: '1984',
    country: 'UK',
    isbn100: '9780451524935' // me creo una nueva propriedad llamada isd100 
  },
  {
    id: 2,
    title: 'hamlet',
    country: 'Denmark',
    isbn100: '9780743477123'  // me creo una nueva propriedad llamada isd100 
  }
]
*/


const newBooks2= books.map(function (book) {   
  return {
  ...book, // esto me hace una copia del libro (book)
  // tres puntos + book, se llama spread operator
    image: "https://img......"  // aca me esta aumentando la propriedad image
  }
});

console.log(newBooks2)
/*
[
  {
    id: 1,
    title: '1984',
    country: 'UK',
    pages: 328,
    isbn: '9780451524935',
    image: 'https://img......' // aumentado la propriedad image
  },
  {
    id: 2,
    title: 'hamlet',
    country: 'Denmark',
    pages: 342,
    isbn: '9780743477123',
    image: 'https://img......' // aumentado la propriedad image
  }
]
*/





// tengo un arreglo de precios y quiero otro arreglo pero de los precio + el igv 18% (0.18)

const prices = [100.3, 2000.45, 125, 305];

// primero 
const pricesIGV = prices.map(function (price){
 return price * 1.18 
})
console.log(pricesIGV)
// [ 118.35399999999998, 2360.531, 147.5, 359.9 ] 
// hace la operacion pero tenemos que meterle .tofixed(2)  asi se ve mejor


// segundo 
const pricesIGV = prices.map(function (price) {
  return ((price * 1.18).toFixed(2));
});

console.log(pricesIGV);
// [ '118.35', '2360.53', '147.50', '359.90' ]
// ma todo esto esta en string



// tercero  -  lo trasformamos en number--
const pricesIGV = prices.map(function (price) {
  return Number((price * 1.18).toFixed(2));
});

console.log(pricesIGV);
// [ 118.35, 2360.53, 147.5, 359.9 ]


/* 
.toFixed(2) se usa solo para numeros pero retorna string
 console.log(pricesIGV.toFixed(2)); // esto no es posible xk priceIGV es un array

.tofixed  por defecto lo convierte en string

 entonces le ponemos a que todo eso che se convierta en number (.....)
 Number((price * 1.18).toFixed(2))
 */



// map -> []
// map itera y retorna 


// forEach -> nada
// forEach solo itera y no retorna nada

function countVowels(names) {
  const vowels = "aeiou".split("");

  const result = [];

  names.forEach(function (name) {
    // paso 1: covierto name a minuscula
    const nameInLowerCase = name.toLowerCase();
    let count = 0;
    // contador count

    // convierto uno string in array 
    nameInLowerCase.split("").forEach(function (letter) {
      if (vowels.includes(letter)) {
        count++;
      }
    });

    result.push({
      originalName: name,
      vowels: count,
    });
  });

  return result;
}

countVowels(["Pepe", "Juan", "Maria", "Pedro"]);
/*
[
  { originalName: 'Pepe', vowels: 2 },
  { originalName: 'Juan', vowels: 2 },
  { originalName: 'Maria', vowels: 3 },
  { originalName: 'Pedro', vowels: 2 }
]
*/