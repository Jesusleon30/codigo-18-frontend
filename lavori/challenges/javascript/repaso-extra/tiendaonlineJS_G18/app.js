



async function renderCategories (){

    const response = await fetch('https://fakestoreapi.com/products/categories')
    // const categories = response.json()
    //categories me devuelve una promesa pendiente y  lo cambiamos a formato json 
    //pero necesitamos del await 
    const categories = await response.json()

    console.log(categories);
    
    // accesso desde js a html con una variable <section class="categories">
    const categoriesDiv = document.querySelector('.categories')

    // cada categoria vamos a colocar dentro de su etiqueta en este caso el button
    // creamos una variable  por el momento vacia
    let categoryButtons = ''

    // voy a coger la variable categories y lo voy a recorrer con un forEach
    // y le vamos a decir que el elemento lo envuelva en un button
    // pero para que no se pierda los button los vamos a guardar dentro let categoryButtons = ''
    categories.forEach( category => {
        categoryButtons = categoryButtons + `<button>${category}</button>` // template string
        // guaradalo juntos con los  demas button que gia estan guardandose
        

    // ahora vamos a imprimir en el navegador dentro al categoriesDiv
    // <section class="categories">
    //             <!-- // innerHTML aca vamos a colocar los 4 buttons -->
    categoriesDiv.innerHTML = categoryButtons


    // ahora vamos a meterle un evento a cada buttons con onclick
    // primero accedemos a los botones con manipulacion del don  
    // vamos a usar el querySelector con el elemento 
    // querySelectorAll accedemos a todos los botones
    // voy a crear una variable con la que voy acceder a cada button
    const buttons = document.querySelectorAll('button')

    // ahora vamos a recoger cada uno de los botones con forEach

    buttons.forEach( button => {
        button.addEventListener('click', event => {
            console.log(event.target.textContent);
            // solo lo hemos inprimido en console
            fetchProductsByCategory(event.target.textContent)
        } )
        // addEventListener escuchador de evento: quiere un evento y una function
        // haciendo un click va hacer una tarea button.addEventListener('click', () => {} )
        // event es un object de javascript dentro el event vamos a buscar el target y capturar el texto
        // el target rapresenta el button  y vamos al textContent (quiero ese texto)

        // ahora tendria que hacer un llamado al api con su url de Get products in a specific category
        
    })

    }) 

console.log(categoryButtons);
}




async function fetchProductsByCategory(categoryName){
    // const response = await fetch('https://fakestoreapi.com/products/category/jewelery') // vamos a convertir la url en dinamica
    const response = await fetch (`https://fakestoreapi.com/products/category/${categoryName}`) 
    const products = await response.json()

    console.log(products); 


    // vamos a usar la otra section  en html <section class="products">
    const productsDiv = document.querySelector('.products')

    // creamos la variable vacia 
    let productElements = ''




    // recorremos el array de object
    // a buscar un producto solo 
    products.forEach ( product=>{
        productElements = productElements + 
        `
        <article class='product' >
            <img class= 'product__image' src='${product.image}'/>
            <div class= 'product__description'> 
              <h2 class = 'product__title'>${product.title}</h2>
              <p class = 'product__price'>${product.price}</p>
            </div>
        </article>
        `

        console.log(productElements)
     }) 

     productsDiv.innerHTML = productElements



}

renderCategories()


   





