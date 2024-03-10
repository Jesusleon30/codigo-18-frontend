


// respuesta con if 

function cualEsMayor( a, b) {
    if ( a > b){
        return a;
    } else {
        return b;
    }
}

let mayor = cualEsMayor (10, 5);

console.log(mayor);
// 10




// respuesta con ternario

function cualEsMayor( a, b) {
    return ( a > b ) ? a : b;
}
 
let mayor = cualEsMayor (10, 5);

console.log(mayor);
// 10