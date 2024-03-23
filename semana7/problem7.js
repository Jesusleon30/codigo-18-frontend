/*
 * Reto #7
 * ¿ES UN ANAGRAMA?
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 */
function sortWord(word) {
    return word.toLowerCase().split("").sort().join("");
  // .toLowerCase() lo trasformamos todo en minuscula y asi 
  // no hay problemas de letras con maiuscula y minuscula   

  // .join("") esto lo trasforma en string
  }
  
  function isAnagram(word1, word2) {
                //palabra 1 ,  palabra 2
    if (word1 === word2) return false;
  
    return sortWord(word1) === sortWord(word2);
  }
  
  console.log(isAnagram("hola", "hola"));
  // false

  console.log(isAnagram("arca", "cara"));
  //true

  console.log(isAnagram("lobo", "bolo"));
  //true

  console.log(isAnagram("cola", "loco"));
  // false





 // la function .sort() es para ordenar solo las letras solo cuando tiene un solo caracter 
 // en caso sean dobles ecc. es. "aa" "dd" no va a funcionar
 // ejemplo: 
 ["a", "c", "b", "e", 'd'].sort() // estos caracter son unicos
 // [ 'a', 'b', 'c', 'd', 'e' ]



// esempio:
const word1 = "cara"
const word2 = "arca"

word1.split('').sort()
// [ 'a', 'a', 'c', 'r' ]

word2.split('').sort()
// [ 'a', 'a', 'c', 'r' ]

// aca vemos que ambos son iguales el orden 
// percio podemos decir que ambas palabras luego de reordenarla son iguales siendo iguales y esto es un Anagrama



