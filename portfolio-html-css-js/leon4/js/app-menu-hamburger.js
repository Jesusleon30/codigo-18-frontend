


const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");


// le creo una function para que cuando este abierto el menu lo cierre e viceversa
function toggleMenu (){
    menu.classList.toggle("menu_opened");
}

// le vamos hacer que escuche un evento onclick y cuando le haga click entonces le va a ejecutar el menu_opened 
//abrir menu 
openMenuBtn.addEventListener("click", toggleMenu);
//cerrar menu
closeMenuBtn.addEventListener("click", toggleMenu);


// desde aqui vamos a seleccionar un links qualquiera para salir del buttom Hamburger


// quando seleczionemos qualkier elemento que comienze con #
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');


// de esta manera vamos a recorrer todos los elementos del menu y cada vez que le demos a uno de ellos 
//se va a cerrar el menu que sale hacia adelante y va air donde le dee.

menuLinks.forEach(menuLinks=>{
    menuLinks.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    })
})







