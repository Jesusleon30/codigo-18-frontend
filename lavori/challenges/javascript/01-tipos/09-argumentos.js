// function mas flexibles

function suma() {
  return 2 + 2;
}
// return la operacion 



// PARAMETROS:

// valores dentro de las function se llaman parametros

/*function suma( parametro es. a ){
    return 2 + 2; 
}
 a se va comportar como una variabile
*/

function suma(a){
  return a + 2;
}


// ARGUMENTOS: 

// le asignamos el valor a una variabile como x ejemplo
// valores cuando llamamos a las function se llaman argumentos

// let resultado = suma( argumento);

let resultado = suma(5);
console.log(resultado);
// 7 



//las function pueden recibir multiples parametros y argumentos


function suma2(a, b){
    return a + b;
}

let resultado2 = suma2(5 , 6);
console.log(resultado2);

console.log (typeof suma2);
//function



/* existe una variable especial llamada arguments para ver todos 
los valores que se estan pasando a esta function */

/* pero no es recomendable ma es bueno saber si es que lo vemos
en algun codigo */
function suma3(a, b){
    console.log (arguments) // variable:arguments
    return a + b;
}

let resultado3 = suma3(5 , 6, 1, 2, 3);
console.log(resultado3);

/*
Arguments(5) [5, 6, 1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
0:5
1:6
2:1
3:2
4:3
callee: ƒ suma3(a, b)
length: 5
*/

// esta apareciendo un nuevo array





