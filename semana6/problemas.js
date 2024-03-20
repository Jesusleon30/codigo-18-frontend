/*
Revertir una cadena

Crea una función que tome una cadena como entrada y devuelva una nueva cadena con los caracteres en orden inverso.

Ejemplo
hola = aloh
mundo = odnum
*/

function invertirCadena(texto) {
  // primero validamos si el parametro texto es una cadena
  if (typeof texto !== "string") {
    return "Unicamente aceptamos textos";
  }

  return texto.split("").reverse().join("");
}

invertirCadena(100); 
//  'Unicamente aceptamos textos'

invertirCadena(true);
//  'Unicamente aceptamos textos'

invertirCadena("hola mundo");
//  'odnum aloh'

/*
Contar la cantidad de vocales en una cadena:

Crea una función que tome una cadena(string) como entrada y devuelva\
la cantidad de vocales que contiene. Puedes considerar tanto las vocales
en mayúsculas como en minúsculas.

hola => 2
celular => 3
telefono => 4
*/


function contarVocales(texto) {
  if (typeof texto !== "string") return "No es un texto";
  //se puede meter en una sola linea de codigo en if solo si esque hay un return directamente

  const vocales = "aeiou".split("");
  const textoEnMiniscula = texto.toLowerCase();
  // .toLowerCase() trasforma in minuscula
  let contador = 0;


/*
dentro del for
 tenemos una variable declarada let i = 0; condicion i < textoEnMiniscula.length; accion i++

*/


  for (let i = 0; i < textoEnMiniscula.length; i++) {
    if (vocales.includes(textoEnMiniscula[i])) {
      contador++;
    }
  }
  
  // forma pasada de concatenar
  // return `La cantidad de vocales son: "+ contador + "." ; // ejemplo con el + (mas)\

  // template string
  // forma actual me permite concatenar variable contador mas string sin usar el mas (+)
  return `La cantidad de vocales son: ${contador}`;
  // se usa la comilla inversa dentro dolar y llaves:  `  letras....  $ { variable....}  `  
}

contarVocales("telefono");
// ' La cantidad de vocales son: 4 '
contarVocales("celular");
// ' La cantidad de vocales son: 3 '



// esempi

const nombre = "pepe"
for (let i = 0 ; i< nombre.length ; i++){
  console.log (i)
}
/*
0  // p
1  // e
2  // p
3  // e
 */
const nombre = "pepe"
for (let i = 0 ; i< nombre.length ; i++){
  console.log (nombre [i])
}
/*
'p'
'e'
'p'
'e'
*/
const vocales = "aeiou".split('')
vocales.includes( 'p')
// false

// .includes me dice si esque dentro la variabile vocales existe la letra p 
//es false xk no existe
vocales.includes( 'a')
//true


"telefono".length
// 8 









/*
Comprobar si un número es primo:

Escribe una función que tome un número(number) como entrada y devuelva true si es primo y false si no lo es. Un número primo es aquel que solo es divisible por 1 y por sí mismo.

1 = NO
*/

function comprobarSiEsPrimo(numero) {
  if (typeof numero !== "number") return "Solo se aceptan numeros";

  if (numero === 1) return false;

  // en este caso no me voy a evaluar numero por numero 
  // la cantidad maxima de un primo es 2 asi que le ponemos esto
 
  let contador = 0;
  // 


  for (let i = 0; i <= numero; i++) {
    if (numero % i === 0) contador++;
    // con el porcentaje nos da si es divisible 
    // 20 % 2  nos da 0 xk 20 es multiple de 2
    // 20 % 3 nos da 2 eso quiere decir que no es divisible

  }

  return contador === 2;
  // ritorno solo si es primo
  // no sera necesario un if xk gia por defecto torna un true e false
}

console.log(2 === 2);
console.log(1 === "1");

comprobarSiEsPrimo("hola");
// Solo se aceptan numeros
comprobarSiEsPrimo(true);
// Solo se aceptan numeros

comprobarSiEsPrimo(1);
// false

comprobarSiEsPrimo(20);
// 6 no es primo
comprobarSiEsPrimo(97);
// 2 si es primo
comprobarSiEsPrimo(3);
// 2 si es primo
comprobarSiEsPrimo(100);
// 9 no es primo
comprobarSiEsPrimo(10.4);
// false
comprobarSiEsPrimo(2.3);
//false


/*
Suma de los elementos de un array:
Escribe una función que tome un array de números como entrada y devuelva la suma de todos sus elementos.

[1, 10, 5] = 16
[20, 43, 3] = 66
*/
function sumarArray(numeros) {
  // primero validamos si es un array
  if (typeof numeros !== "object" || numeros.length < 1) {
    return "Solo aceptamos arrays con información"
  }
  
  let suma = 0
  
  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] !== "number") {
      return "Solo aceptamos arrays de numeros"
    }
    suma += numeros[i]
  }
  
  return suma
}

sumarArray([1, "10", 3])
// "Solo aceptamos arrays de numeros"
sumarArray([1, 10, 3])
// 14
sumarArray([])
// "Solo aceptamos arrays con información"
sumarArray(1)
// "Solo aceptamos arrays con información"