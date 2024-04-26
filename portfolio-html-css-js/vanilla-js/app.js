


// se le llama vanilla xk es codigo imperativo 
// le estamos describiendo como tiene que hacer las cosas con unas series de istrucziones
// no es scalabre osea si le queremos meter en otro lado va hacer mas dificultoso




// recuperamos el button 
const button = document.querySelector('button');
// gia tenemos  en la costante el button 

// al hacer click en el button, tenemos que ejecutar una function
button.addEventListener('click', function(){ 
    // vamos a escuchar el evento del click y al hacerlo vamos a tener una function

    //tenemos que recuperar el id del html
    const id = button.getAttribute('data-id')
    // se crea una constante y recuperamos el attributo ('data-id')


    // se puede hacer anque con esto this significa al mismo elemento
    //const id = this.getAttribute('data-id')

    // llamar a un servicio  para actualizar si me gusta 
    // tooglelike(id)

    if (button.classList.contains('liked')){

         //si en la lista de button contiene liked

         // le quitamos la classe liked
        button.classList.remove('liked')
       // this.classList.remove('like')

       button.innerText = 'me gusta' 
       // en el button vamos a cambiarle el texto
    }else{

        button.classList.add('liked')
        // la aumentamos el like 

        button.innerText = 'quitar me gusta' 
        // le cambiamos el texto 
    }

})