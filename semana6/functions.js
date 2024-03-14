


//  todo esto lo vemos en el RunJS



/* ------ Function ------ */

// creando funciones pueden ser llamas por ejemplo pueden 
// ser como parametros ect  se pueden usar para bastantes cosas

// reutilizar



/* ejemplo */

// Calcular el area de un circulo
// Formula PI * r2

// Formar de crear una funcion

// Buena practica
function calcularAreaDeCirculo(radio) {
  const area = Math.PI * Math.pow(radio, 2);
            //  3,14 * radio * radio
  // return area          
  return Number(area.toFixed(2)); 
  // da string (toFixed(2) lo trasformamos en numero con number adelante
}

calcularAreaDeCirculo(10); //  314.16
calcularAreaDeCirculo(20);  // 1256.64




// tofixed(2 o 3 o 4 ect) esto lo pasa a decimales los numeros que deseo 
// pero me convierte en un string
// es. 3,146556  poi tofixed(3) sera '3,146' 


/* otras formas de convertir en number : 

mas generico: moderno
Number(area.toFixed(2)); 


formas antiguas:
parseInt(area.toFixed(2));  // 314
parsefloat(area.toFixed(2)); // 314.16


es poco comun: con el + adelante
+area.toFixed(2) // 314.16   

*/



/*
// No recomendable:

function calcularAreaDeCirculo()
{

}


function calcular_area_de_circulo()
{

}

function calc_a_circulo()
{

}

*/





// funtions 

function nombre () {

}


// java gia tiene function integrado por ejemplo
const n =  100.6765786
n.toFixed(2)
// 100.67

/*

revertir una  cadena: 

hola = aloh
mundo = odnum
*/

/*  crea una funcion que tome una cadena como entrada y devuelva una nueva 
cadena con los caracteres en orden inverso.
*/



/* inizio ejemplo */

function invertirCadena(texto){
  // primero validamos si el parametro texto es una cadena
  if (typeof texto !== "string"){
    return "unicamente aceptamos textos"
  }

  return texto.split('').reverse().join('')
  // llamamos a tres funciones
  
}

invertirCadena('hola mundo')
//  'odnum aloh'

/* fine ejemplo */



/*cadena como entrada:

invertirCadena(100)  // 001  non va bene xk es numero
invertirCadena(true) // true no esta bien xk true no es cadena

percio usamos:
(typeof texto !== "string")


*/

//'hola'.reverse()
// reverse sirve no funciona en este caso con el string
// xk sirve solo para un array (lista)

//['h','o', 'l', 'a'].reverse()
// [ 'a', 'l', 'o', 'h' ]



"hola".split("")   //   [ 'h', 'o', 'l', 'a' ]
// split me trasforma in un array

"hola".split("").reverse()   //    [ 'a', 'l', 'o', 'h' ]
// reverse

"hola".split("").reverse().join('')    //  'aloh'
//join lo trasforma en un string 

"hola".split("").reverse().join('-')    //   'a-l-o-h'
//join lo trasforma en un string 




/* inizio ejemplo */

function invertirCadena(texto){
  // primero validamos si el parametro texto es una cadena
  if (typeof texto !== "string"){
    if (typeof texto === "number"){
      return "no se acepta numeros"
    }
  
    return "unicamente aceptamos textos"
  }

  return texto.split('').reverse().join('')
  // llamamos a tres funciones
  
}

invertirCadena(100)

// 'no se acepta numeros'

/* fine ejemplo */

















