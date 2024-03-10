

// while 
// do while 
// for 


/* si por alguna razon tenemos que iterar un listado de elementos */

let animales = [ 'leon', 'gato', 'tigre']

// FOR -- OF

// for ( nombredecomosedevellamarcadaelemento   of  nombredelavariablemadre  ) {}
for ( let animal of animales) {
    console.log (animal); // imprime el animal 
}
// leon
// gato 
// tigre





// otro modo de poder iterar las listas
let i =0;
while ( i < animales.length){
    console.log(animales[i]);
    i++;
}
// leon
// gato 
// tigre



























