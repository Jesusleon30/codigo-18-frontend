let animales = ["leon", "caballo"];
// se llama array literal
/* este va a respetar el orden que le demos y los elementos de un array 
comienzan desde zero.*/

console.log(animales);
/*(2) ['leon', 'caballo']
0: "leon"
1: "caballo"
length: 2 */

/*si queremos abceder al primer indice del elemento 
tenemos que pasarle al indice zero*/
console.log(animales[0]);
//leon

//agregar un elemento: 
animales [2] = "dragon";
console.log(animales);
// (3) ['leon', 'caballo', 'dragon']


//ojo:
//agregamos otro elemento y vemos como se comporta 
animales[10] = "pez";
console.log(animales);
/*(11) ['leon', 'caballo', 'dragon', vuoto × 7, 'pez']
0: "leon"
1: "caballo"
2: "dragon"
10: "pez"
length: 11
*/

// me dice que tengo 7 elementos vacios ora lo vemos que tipo son 
console.log(animales[7]);
// undefined

//definicion 
console.log(typeof animales);
//object

/* los array dentro javascript se comportan como objectos nosotros podemos
abceder a las propriedades de estos. 
*/

console.log(animales.length);
// esto me va a devolver la cantidad de elementos que hay dentro

