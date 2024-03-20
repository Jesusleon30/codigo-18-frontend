
// salir de ciclos o saltar 




// CONTINUE 

let a = 0;
while ( a < 6 ) {
    a++;
    if  ( a === 2){
        continue;
    }
    console.log(a); // este es el valor de 2 y nose ve dentro el if
    // de esta manera nosotros podemos saltarnos esta instruczion
}
// 1
// 3
// 4
// 5
// 6


/* en el caso i === 2 esto va a continuar con el loop 
 esto quiere decir que una vez nosotros entremos en continue 
despues de este va hacer ignorado y la ejecuzion
 va a volver al comienzo
*/




/*  BREAK  */

 let i = 0;
while ( i < 6 ) {
    i++;
    if  ( i === 2){
        continue;
    }
    if (i === 4) {
        break; // como i vale 4 detenemos el ciclo while
    }
    console.log(i); 
}
// 1 
// 3


























