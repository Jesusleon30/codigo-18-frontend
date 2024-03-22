
  // --- new set --- 
  // para ver se mete .size  (es parecido al .length)
  //funcionamento elimina las repetidas 
  
  //const numeros = [1, 1, 2, 3, 4, 5, 6, 6];
  const numeros = new Set([1, 1, 2, 3, 4, 5, 6, 6]);
  numeros.size
  // 6          lo que hace new set me elimina las repetidas las dobles en este caso 1 y 6 
  
  // otro ejemplo pero en este caso new set me dice que no hay repetidas
  const numeros1 = new Set([1, 2, 3, 4]);
  numeros.size
  // 4   
  
  
  // razonando con las repetidas
  // primer caso
  function findFirstRepeated(gifts) {
    const cleanNumbers = new Set(gifts)
    
    // si son iguale no hay numeros repetidos
    if (gifts.length === cleanNumbers.size) return -1
    }
  
  
  const giftIds2 = [1, 2, 3, 4];
  const firstRepeatedId2 = findFirstRepeated(giftIds2);
  console.log(firstRepeatedId2);
  // me da como resultado -1 y esta bien hasta ahora  
  // -1    
  
  