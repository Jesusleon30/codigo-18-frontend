
// short-circuit



/*   OR ||  */
// [] || {}  
// []
// envez de devolver un booleano nos da [] array


/* AND && */
// [] && {}
// {}
// envez de devolver un booleano nos da {} object



// falso:  FALSY 

// false
// 0 
// ' ' 
// null
// undefined
//NaN


let nombre = '';
let username = nombre || 'Anonimo' ;
console.log(username)


let nombre2 = 'leon';
let username2 = nombre2 || 'Anonimo' ;
console.log(username2)

// esempio: 
function fn1() {
    console.log('soy funcion 1 ');
    return true;
}

function fn2() {
    console.log('soy funcion 2 ');
    return true;
}

let x = fn1() && fn2();  // en este caso xk los dos son true
// soy funcion 1 
// soy funcion 2 


// esempio 
function fn3() {
    console.log('soy funcion 3 ');
    return false;
}

function fn4() {
    console.log('soy funcion 4 ');
    return true;
}
let y = fn3() && fn4();
// soy funcion 3  


/* esto nos va a servir:
 si por alguna razon nosotros queremos escrivir alguna logica
 pero necesitamos que una logica anterior hayga devuelto un true !!

 en ese caso nosotros podemos utilizar del operador AND al ejecutar function
*/





