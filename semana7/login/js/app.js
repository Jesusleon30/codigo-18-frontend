
// localstorage puede guardar solo in string 
// el backend nos da un object pero ese object lo convierto in string y lo guardo

// login  

// para poder obtener el formulario en js 
// creamos una variable con querySelector
const form = document.querySelector("form");
// si quiero obtener la etiqueta form dentro la parentesi meto ("form") 
// si como tenemos un solo form en html esta vez nos va bien 

// console.log(form);  // <form class="mt-10 flex flex-col gap-5">

//recordar si como no tengo un id o una classe puedo usar la etiqueta


/**
 * Como hacemos para poder capturar el evento submit del form?
 *
 * Sencillo, solo debemos usar el evento onsubmit, ahora recordemos
 * que este evento es solo de los formularios
 *
 * Ejemplo
 *
 * form.onsubmit = function (event) {
 *  ...
 * }
 */

// forma antigua:

// form.addEventListener('submit',function(event{
//   ....
// }))


// forma moderna:
form.onsubmit = function (event) {
  /**
   * Los formulario tienen la tendencia recargar la página
   * para evitar que el evento onSubmit recargue la pagina y se vean los datos del usuario
   * vamos usar la funcion preventDefault() esta funcion es parte
   * del evento que recibimos en nuestra funcion
   */
  event.preventDefault();
  /**
   * Debemos saber que toda la informacion del formulario esta en event
   * console.log(event)
   * 
   * haciendo el console.log (event)
   * dentro el object vemos el target que dentro esta el value del correo y el value de la password
   */



  
  const formInfo = Array.from(event.target) // con array.from lo trasformo in array
    .filter(function (input) {  // filter para eliminar los vacios 
      return input.value;
    })
    .map(function (input) {  // asi unicamente me quedo con el valor
      return input.value;
    });

  // esto se llama destructuracion
  const [email, password] = formInfo;   



  /**
   * Debemos buscar dentro del array de users la info basada en email y password
   */
  const result = users.find(function (user) {
    return user.email === email && user.password === password;
  });



  // alerta de la libreria https://cdn.jsdelivr.net/npm/sweetalert2@11
  // si !result no existe valdra undefined

  if (!result) {
    // TODO: Mostrar alerta de error en este caso
    Swal.fire({ // esto es fijo y lo demas dentro el object es personalizado mirar los ejemplos de la web
      title: "Hubo un error!",
      text: "Email y/o password incorrectos",
      icon: "error",
    });
    return;
  }

  // Vamos a guardar al usuario en localStorage
  /**
   *  localStorage.setItem(key, value)
   * Esto recuerden es para crear un elemento en localStorage
   *
   * ojo: JSON.stringify(result) sirve para convertir un object a un string
   * json es una classe
   */
  localStorage.setItem("user", JSON.stringify(result));
  // TODO: Enviar a otra pagina
  location.href = "http://127.0.0.1:5500/semana-7/login/home.html";
};


// en localStorage se puede guardar un solo user si entran varios user se sobre-escrive


