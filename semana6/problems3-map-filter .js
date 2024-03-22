


// ---- MAP Y FOREACH  -------

// funzionan solo con array


//const numbers = [10, 20, 34, 53];
array.map(function(item){
  
})
// en la primera vuelta item valdra 10 
// en la segunda vuelta item valdra 20 
// en la tercera vuelta item valdra 34 
// en la quarta vuelta item valdra 53 



const numbers = [10, 20, 34, 53];

// map retorna un array
numbers.map(function (item, index, array) {

  // primer elemento item (primera vuelta vale 10 e cosi via...) 
  // segundo elemento es el indice (que inicia siempre a contar de zero)--
  // el tercero parametro es el mismo array completo

})


// forEach no retorna nada 
numbers.forEach(function (item, index, array) {

// primer elemento item (primera vuelta vale 10 e cosi via...) 
  // segundo elemento es el indice (que inicia siempre a contar de zero)--
  // el tercero parametro es el mismo array completo

})






//  ---  FILTER Y FIND --- 

// filter : retorna un array con la informacion filtrada



// filter recive una function y el parametro de la funcion es el item que en este caso 
// el nombre adecuado e number xk es singular

// filter retorna un array 

const numbers = [10, 20, 34, 53];

const number2 = numbers.filter(function (number) {
  return number > 20;
});

console.log("Number2", number2);
// 'Number2' [ 34, 53 ]





// ejemplo 

// hacemos un array de objectos con un filter 

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

const filterBooks = books.filter(function (book) {
                                        // item 
  return book.pages > 330;
});

console.log(filterBooks);

/*
[
  {
    id: 2,
    title: 'hamlet',
    country: 'Denmark',
    pages: 342,
    isbn: '9780743477123'
  }
]
*/

// aca nos da como respuesta el segundo item xk supera pages las 330 

















































