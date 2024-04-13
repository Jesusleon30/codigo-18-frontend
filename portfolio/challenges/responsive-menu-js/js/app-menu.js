const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

// le creo una function para que cuando este abierto el menu lo cierre e viceversa
function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

// le vamos hacer que escuche un evento onclick y cuando le haga click entonces le va a ejecutar el menu_opened
//abrir menu
openMenuBtn.addEventListener("click", toggleMenu);
//cerrar menu
closeMenuBtn.addEventListener("click", toggleMenu);



