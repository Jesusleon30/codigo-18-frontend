
// JS  es un lenguaje debilmente tipado
// TS  es un lenguaje fuermente tipado es un complemento de js osea que si declaras una variable ese no cambia por nada
// es. si es tipo string no cambia nunca esa variable a number asi como sucede en js 




//Cuantas formas de crear una VARIABLE

// mutable = el valor o tipo puede cambiar
// inmutable = el valor o tipo no puede cambiar

// MUTABLE



/** ------ VAR ------ */


// NO SE DEVE USAR  VAR 

/* var
   - La forma antigua de declarar variables
   - scope es mucho mayor
   - ocupa mas espacio en memoria
*/


var nombre = "Linder";
var nombre = 10;

console.log("usando var", nombre);

//  En esta parte no me da problema el console.log pero es un error de escritura 
// xk no puedo usar dos variables con el mismo nombre y en este caso se sobre-escrive sin dar error



/** ------ LET ------   */

/*
  let
  - La forma moderna de declarar variales
  - El scope es en base al ambito donde se crear
  - tiene una mejor optimización en memoria
*/


/* en este caso aca si me genera un error xk gia existe la variable edad
let edad = 10
let edad = " Linder " */



// creamos la variable con valor 10
let edad = 10;
// verificar que la variable edad exista, le reasigna un nuevo valor y un nuevo tipo
edad = "Linder";

// cuando creamos una variable sin prefijo JS lo asume como si se usara VAR
direccion = "Av siempre viva";


// INMUTABLE
const pi = Math.PI;
const fechaDeNacimiento = "1900-01-01";
const dni = "88888888";
const tipoDeSangre = "O+";
console.log(pi);





/**    ------ TIPOS DE DATOS ------     */

/*
string
number
bool
undefined
object
null
symbol
BigInt // 
*/
// Listas (arrays) / Fechas /



/* ------ string ------ */
let apellido = "Hassinger";
console.log(typeof apellido);


/*  ------ number ------ */
let altura = 1.78;
console.log(typeof altura);


/*  ------ bool ------ */
let esMayorDeEdad = true; // false
let es_mayor_de_edad = true; // no recomendable
let esMDEdad = false; // mala practica
console.log(typeof esMayorDeEdad);


/* ------ undefined ------ */
// si una variable es creada sin valor es automaticamente un undefined
let numeroDeCelular //= undefined;
console.log(typeof numeroDeCelular);
// undefined


/** ------ null ------ */
// se olvidaron de null
// esta variable no existe a la vez practicamente es un error de lenguaje
// este si es un tipo de valor
let variable = null;
console.log(typeof variable);
// para jv es un object 

let suma = 0;
//let suma = null // error
console.log(null + 10); // no es correcto este console.log
console.log(0 + 10);



/** ------ lista array ------*/ 

const alumnos = ["Pepe", "Maria", "Juan"];
const persona = {
  nombre: "Linder",
  apellido: "Hassinger",
};
console.log(typeof alumnos);
// object
console.log(typeof persona);
// object




// ejemplo para ver poi symbol y ver la diferencia
const n1 = 10;
const n2 = 10;
console.log(n1 === n2);
// true


/**  ------ symbol ------ */
// symbol es un objecto unico 
const n3 = Symbol(10);
const n4 = Symbol(10);
console.log(n4 === n3);
// false



/**  ------ bigint ------  */
// (es como la n al final de los numeros grandes) en este caso no es necesario poner n 

const n5 = BigInt(999999999999999999999);
// guardado completo

const n6 = 999999999999999999999;
// este no se guarda por completo solo hasta un cierto numero 

console.log(typeof n5);
console.log(typeof n6);

console.log(n5 === n6);
//false