// cambio de thema color y salvar




// metemos todo dentro una function asi no es global porque por  defecto js hace eso osea global.
//(function()})();

(function(){
    const userTheme = localStorage.getItem("theme");
// con javascript vamos a pasarle al mediaquery osea vamos a mirar al @media
const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");



// paso 3

// si el usuario a seleccionado el tema oscuro o no selecciono nada con ! y tenemos en el
//sistema tema oscuro entonces  igual vamos a darle tema oscuro
if (userTheme === "dark" || (!userTheme && darkQuery.matches)) {
  setTheme("dark");
}

// aca le decimos que sino ahy nada en el localstorage agarre lo que ahy en el sistema asi respetamos lo que el usuario decee
darkQuery.addEventListener("change", function (e) {
  if (!localStorage.getItem("theme"))
   setTheme(e.matches ? "dark" : "light");
});

// en el sistema operativo va a funcionar pero si quiero mantener el tema quando recargue la pagina nose va a mantener
// asi que vamos a usar el localstorage
// function setTheme(newTheme) {
//   document.documentElement.setAttribute("data-theme", newTheme);
//   localStorage.setItem("theme", newTheme);
// }


// ahora solo esto voy a convertir de forma global poniendo
// asi esto puedo usar en react 
 window.__setUserTheme = function setTheme(newTheme) {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }
  


})();




// paso 1

// // con javascript vamos a pasarle al mediaquery osea vamos a mirar al @media
// const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");


// si esta media query hace matches significa que estamos en el tema oscuro
// en ese caso vamos a decirle setTheme("dark")
// y lo que hace setTheme("dark") es agarrar este tema que le pasamos por parametro y lo vamos
// a pasarle en el data-theme
// if (darkQuery.matches) {
//   setTheme("dark");
// }

// function setTheme(newTheme) {
//   document.documentElement.setAttribute("data-theme", newTheme);
// }

// paso 2

// if (darkQuery.matches) {
//   setTheme("dark");
// }

// // aca le decimos cada vez que cambie ese valor de @mediaquery por preferencia del usuario
// // entonces vamos agarrar el valor que tenga  ese @mediaquery
// // e.matches significa que el usuario tiene tema oscuro sino tiene tema claro.
// darkQuery.addEventListener("change", function(e){
//     setTheme(e.matches ? "dark" : "light")
// })

// // en el sistema operativo va a funcionar pero si quiero mantener el tema quando recargue la pagina nose va a mantener
// // asi que vamos a usar el localstorage
// function setTheme(newTheme) {
//   document.documentElement.setAttribute("data-theme", newTheme);
//   localStorage.setItem("theme",newTheme);
// }