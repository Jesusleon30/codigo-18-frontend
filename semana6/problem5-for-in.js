






function findNaughtyStep(original, modified) {
    if (original === modified) return "";
    // palabra mas grande
    const word = original.length > modified.length ? original : modified;
    // palabra mas corta
    const word2 = original.length < modified.length ? original : modified;


  /*primera solucion 
  for (let i = 0 ; i < word.length ; i++){
    if (word[i] !== word2[i]){
      return word[i]
    }
  }
  */ 
  


    // los for of se pueden iterar con el string no hace falta un .split
    // -- for in --
    // for in retorna los indices
    for (let i in word) {
      if (word[i] !== word2[i]) {
        return word[i];
      }
    }
  }


  
  const original = "abcd";
  const modified = "abcde";
  console.log(findNaughtyStep(original, modified)); // 'e'
  
  const original2 = "stepfor";
  const modified2 = "stepor";
  console.log(findNaughtyStep(original2, modified2)); // 'f'
  
  const original3 = "abcde";
  const modified3 = "abcde";
  console.log(findNaughtyStep(original3, modified3)); // ''









  





















// esempio

const edad = 18

// forma normal: 

function esMayor(){
  if (edad >= 18){
    return " es mayor de edad"
  } else {
  return "es menor de edad "
 }
}

esMayor()
// ' es mayor de edad'



// operador ternario 
// es una forma de hacer una sola condicion pero en menos linea de codigo

function esMayor2(){
  return edad >= 18 ? "es mayor de edad" : "es menor de edad"
  // ? = entonces  /  : = else
  //estos son obligatorios
}

esMayor2()
// ' es mayor de edad'



































