// le creamos una variabile con igual fetch
const response = fetch('https://fakestoreapi.com/products/categories')
// la api nos tendria que devolver una promesa

console.log(response)
//  Promise {<pending>}

// aca tiene que aver alguien este esperando la llegada de la promesa
// de la data y que lo guarde en una variabile

// usamos asyncawait  (await)recive la data 
// se llama un proceso asincrono await xk nada se detiene 
// pero await detiene el proceso de la data que necesite y una vez que recive esa data lo guarde
//en la variable y despues deja que siga el proceso
// async + await trabajan juntos 

// vamos a necesitar una function para 

/**
  await va siempre delante del fetch
 
 async va delante de la function 
 
  esempio:
 
 async function renderCategories (){

    const response = await fetch('https://fakestoreapi.com/products/categories')

    console.log(response);
}


renderCategories ()
 
 
 */



// con async + await 
// status 200 significa que todo a llegado pero tenemos que cambiar la data a un formatyo json 
// para que lo podamos ver ahy 

// ahora vamos a imprimir al navegador pero vamos a pasar del js a html

// para acceder necesitamos del query.selector


// primero accedemos de forma general y poi especifica



/*
async function renderCategories (){

    const response = await fetch('https://fakestoreapi.com/products/categories')
    // const categories = response.json()
    //categories me devuelve una promesa pendiente y  lo cambiamos a formato json 
    //pero necesitamos del await 
    const categories = await response.json()

    console.log(categories);
}

// ['electronics', 'jewelery', "men's clothing", "women's clothing"]


renderCategories ()

*/

