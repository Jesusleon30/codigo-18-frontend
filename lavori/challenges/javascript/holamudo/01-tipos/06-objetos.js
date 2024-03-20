
// tipo de referencia 

/* 
quiere decir que cuando somn almacenados un la ram del computer 
lo que se esta guardando es una direccion a donde eventualmente se va 
a encontrar guardado el objeto
 */

// personaje de tv 

// declaramos las variables
let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = {
     nombre : "Tanjiro",
     anime : "Demon slayer",
     edad : 16,
}

// lo que ahy dentro las llaves son propriedades 

console.log(personaje);


// adceder a una sola propriedad
console.log(personaje.nombre);

//adceder a una sola propriedad
console.log(personaje["anime"])


// eliminar una de las propriedades 
delete personaje.anime;
console.log(personaje)

