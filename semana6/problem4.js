



function manufacture(gifts, materials) {
    const results = [];
    // hemos creado un array vacio para almacenar la respuesta

    // gift es el juguete

    gifts.forEach(function (gift) {
      // tren
      let condition = true;
      // ['t' , 'r', 'e', 'n']
      // en la primera vuelta  word vale 't' e cosi via...
      // recordar que materials = "tronesa"
      for (let word of gift.split("")) {
        if (materials.indexOf(word) === -1) {  // en este caso la palabra tren nunca entro al if 
                                               // envez la palabra pelota si entra xk no coincide asi que retorna -1
          condition = false;
          break; // esto rompe un bucle
        }
        // en la primera vuelta word es true xk dentro materials encontramos una "t" 
        // percio no entra en if (materials.indexOf(word) === -1)  y lo mandamos a results
      }
  
      if (condition) results.push(gift);
      // si la condicion es true me lleva gift osea el juguete al resultado haciendo un push
      // pero antes quiero ver si la palabra existe con el for


    });
  
    return results;
  }
  






  const gifts = ["tren", "oso", "pelota"];
  const materials = "tronesa";
  console.log(manufacture(gifts, materials)); // ["tren", "oso"]
  // 'tren' SÍ porque sus letras están en 'tronesa'
  // 'oso' SÍ porque sus letras están en 'tronesa'
  // 'pelota' NO porque sus letras NO están en 'tronesa' 
  
  const gifts2 = ["juego", "puzzle"];
  const materials2 = "jlepuz";
  
  console.log(manufacture(gifts2, materials2)); // ["puzzle"]
  
  const gifts3 = ["libro", "ps5"];
  const materials3 = "psli";
  
  console.log(manufacture(gifts3, materials3)); // []