



//----  indexof ---- 
// se usa solo para los array
// la propriedad indexof sirve para poder saber el indice de un elemento

const numbers = [10, 20, 34, 53];

console.log("Indice de un element dentro de un array", numbers.indexOf(34));
// 'Indice de un element dentro de un array' 2
// retorna su indice


console.log("Indice de un element dentro de un array", numbers.indexOf(99));
// 'Indice de un element dentro de un array' -1
// nos da -1 xk no existe 
// cada vez que busquemos dentro el array y no existe como valor nos dara -1







/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si 
*/

function findFirstRepeated(gifts) {
    const cleanNumbers = gifts.filter(function (gift, index) {
      return gifts.indexOf(gift) !== index;
    });
    return cleanNumbers[0] ?? -1;
    // indice zero que en este caso seria 3    
    //  ?? es un tipo de condicion seria si esta variable es undefined o null osea no existe me va a darme -1 
    // en este caso es -1 pero podria ser es. "no existe" e cosi via...

    // Nullish coalescing operator(??)  solo toma null o undefined

  }
  // x
  const giftIds = [2, 1, 3, 5, 3, 2];
  
  const firstRepeatedId = findFirstRepeated(giftIds);
  console.log("caso1", firstRepeatedId);
  // 'caso1' 3
  
  const giftIds2 = [1, 2, 3, 4];
  const firstRepeatedId2 = findFirstRepeated(giftIds2);
  console.log("caso2", firstRepeatedId2);
  // 'caso2' -1
  
  
  
  // Aunque el 2 y el 3 se repiten
  // el 3 aparece primero por segunda vez
  
  // const giftIds2 = [1, 2, 3, 4]
  // const firstRepeatedId2 = findFirstRepeated(giftIds2)
  // console.log(firstRepeatedId2) // -1
  
  // Es -1 ya que no se repite ningún número
  
  // const giftIds3 = [5, 1, 5, 1]
  // const firstRepeatedId3 = findFirstRepeated(giftIds3)
  // console.log(firstRepeatedId3) // 5
  







  // razonemos nuevamente:

  function findFirstRepeated(gifts){
    const cleanNumbers = gifts.filter(function(gift, index){
      return gifts.indexOf(gift) !== index; // esto se cumple solo si es true
    })
    console.log(cleanNumbers);
  }
  // con esta function sabemos quales son las repetidas 
  // el primer elemento de mi array es la repeticion mas cercana
  // [ 3, 2 ]   
  
 
    
  const giftIds = [2, 1, 3, 5, 3, 2];
  const firstRepeatedId = findFirstRepeated(giftIds);


  // step by step (paso a paso)
  /*
  primera vuelta item y index
  0 !== 0  false
                   x
  const giftIds = [2, 1, 3, 5, 3, 2]; // el primer 2 es descartado
 
  segunda vuelta item y index
  1 !== 1  false
                      x
  const giftIds = [2, 1, 3, 5, 3, 2]; // el  1 es descartado

  tercera vuelta item y index
  2 !== 2  false
                         x
  const giftIds = [2, 1, 3, 5, 3, 2]; // el 3 es descartado

  cuarta vuelta item y index
  3 !== 3  false
                            x
  const giftIds = [2, 1, 3, 5, 3, 2]; // el 5 es descartado


  quinta vuelta item y index
  teniendo el indexof me va a buscar la primera repetida  
  2 !== 4  true
                         x
  const giftIds = [2, 1, 3, 5, 3, 2]; 

  sexta vuelta item y index
  teniendo el indexof me va a buscar la primera repetida 
  0 !== 5  true
                   x
  const giftIds = [2, 1, 3, 5, 3, 2]; 








  */






























  
  