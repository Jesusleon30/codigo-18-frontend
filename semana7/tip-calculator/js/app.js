
// // click al containerbill
// containerBill.onclick = function () {
//   console.log("hicimos un click"); // 
// };
// //  hicimos un click      app.js:4 



// click
containerBill.onclick = function () {
  inputBill.focus();
  // osea puedo escribir dentro el inputbill 
};

containerInputPeople.onclick = function () {
  inputPeople.focus();
};


// // .onkeyup tiene un evento y se ejecuta cuando suelto la tecla
// // este event tiene la informacion del input que estamos escriviendo
// inputBill.onkeyup = function (event) {
//   console.log(event)
// };
// // en el input puse  hola100
// // KeyboardEvent {isTrusted: true, key: '5', code: 'Digit5', location: 0, ctrlKey: false, …}
// // de lo que importa  dentro el object en target  es value:"hola100"
// // con esto podemos ver si lo que escrivimos es un numero o letra


inputBill.onkeyup = function (event) {
  validateInputIfNumber(event, "event", containerBill, inputBill);
};

inputPeople.onkeyup = function (event) {
  const validate = validateInputIfNumber(
    event,
    "event",
    containerInputPeople,
    inputPeople
  );
  if (!validate) return;
};

buttonCalculate.onclick = function () {
  // Paso1: Obtener el valor del input bill
  const billValue = Number(inputBill.value); // 100
  const peopleValue = Number(inputPeople.value); // 5

  // Paso2: Obtener los valores de nuestro input y botones
  const getValuePercetange =
    percentages.find(function (percentage) {
      return percentage.isCheck;
    }) ?? percentages.at(-1);

  /**
   * Replace es una funcion la cual me permite buscar caracteres dentro de un
   * string y poder reemplazarlos
   */
  const parsePercetange = Number(getValuePercetange.value.replace("%", "")); // 10

  const operation = billValue + (billValue * parsePercetange) / 100;
  const opetationPerPerson = operation / peopleValue;

  perPerson.textContent = `$ ${opetationPerPerson.toFixed(2)}`;
  total.textContent = `$ ${operation.toFixed(2)}`;
};

/**
 * setButtonTip
 * Recibe como parametro a un element que en este contexto es button
 * lo que queremos obtener de este button es el indice del boton al que le
 * dieron click, sabiendo eso haremos lo siguiente
 */
function setButtonTip(element) {
  // Paso1: Obtener el indice del button
  const buttonIndex = element.dataset.index; // 5% index = 0
  // Paso2: Entrar al array de objecto y buscar por indicie y cambiar la
  // propiedad isCheck = true
  percentages[buttonIndex].isCheck = true;
  // entra al array y entra a la propriedad ischeck y cambialo a true


  // Paso3: Modificamos el valor de las otra opciones false
  for (let percentage in percentages) {
    // Paso4: Validamos que el indice sea diferente a buttonIndex
    if (percentage !== buttonIndex) { // solo entra al if si es true
      percentages[percentage].isCheck = false;
      
    }
  }
  // Paso5: Volvemos a renderizar lo botones con la informaciona actualizada
  renderPercentagesButtons(percentages);
}

/**
 * setInputTip
 * Recibe como parametro a element, recordemos que element es basicamente el input
 * por ende puedo accede a sus propiedades
 */
function setInputTip(element) {
  const validate = validateInputIfNumber(element, "element", element, element);

  if (!validate) return;

  /**
   * Si la validaciones anteriores fueron exitosas entonces ahora procedemos a
   * poner todos los button a false, porque recorder que el objeto existe
   * la propiedad isCheck la cual usamos para saber si un boton esta
   * seleccionado
   *
   * Para pasar todo a false y además mantener el valor del input que estamos
   * escribien vamos usar la funcion map
   *
   * En la funcion estamos retornando la misma estructura
   *
   * {
   *  type: "button",
   *  isCheck: false,
   *  value: "4"
   * }
   *
   * En el type y el isCheck no hay nada nuevo siemplemente mantenemos el valor
   * de type y pasamos los isCheck a false, pero en caso de value quiero guardar
   * el valor que el usuario escribio, por ende hago una condicion
   *
   * Si el type es igual a input entonces cambio value = element.value, pero si
   * no se cumple esa condicion mantengo el valor por defecto
   */
  const percetangesFalse = percentages.map(function (percentage) {
    return {
      type: percentage.type,
      isCheck: false,
      value: percentage.type === "input" ? element.value : percentage.value,
    };
  });

  percentages = percetangesFalse;
  /**
   * Como en el map estamos creando un array con la informacion cambiada vamos a
   * pasarle ese nuevo array a la funcion renderPercentagesButtons la cual va a
   * recrear todo ese div con los nuevos valores
   */
  renderPercentagesButtons(percetangesFalse);

  /**
   * Ocurre un problema como estamos volviendo a renderizar el div con los botones
   * e input, el focus (el cursor) del input se pierde, para ellos vamos a forzar
   * el focus de este elemento para que siempre este al final del text que esta
   * escribiendo el usuario
   */

  //Paso 1: Obtenemos el input que se acaba de crear
  const currentInput = document.querySelector(
    `#input-bill-${element.dataset.index}`
  );
  // A ese input le hacemos focus, pero sucede que al hacer focus es cursor va
  // a estar en la parte inicial del input
  currentInput.focus();
  // Para que el cursor se posicione en la parte final del texto usamos la
  // funcion setSelectionRange la cual va a permitirnos mover el cursor al final
  // pasandome la cantidad de caractares que tiene actualmente el input
  currentInput.setSelectionRange(
    currentInput.value.length,
    currentInput.value.length
  );
}

/**
 * renderButton
 * Esta funcion sirve para renderizar los botones que tenemos en la vista
 * ahora esta lista de botones funcion como si fueran radioButtons, es decir
 * podemos seleccionar solo 1 a la vez, por ende yo requiero saber a que boton
 * le dieron click y marcar ese como seleccionado
 */
function renderButton(percentage, index) {
  /**
   * Paso1: Para poder darle un estilo diferente al boton que esta
   * seleccionado vamos usar la propiedad isCheck, por que recuerden que esa
   * propiedad va a ser true cuando el boton sea seleccionado
   */
  const extraClass = percentage.isCheck ? "active" : "";

  // quando un elemento tenga la clase active
  // va a cambiar el modo de style (ir a css para ver los cambios)

  /**
   * Cuando creamos el boton estamos asignando al funcion setButton(this) para
   * cada click del boton, entonces al igual que el input estamos creando el
   * data-index para poder saber la del boton al que le dieron click
   */
  return `
    <button onclick="setButtonTip(this)" class="${extraClass}" data-index="${index}"> 
      ${percentage.value}
    </button>`;
}
/*
envez de usar classe se puede usar en javascript data-(y un nombre que estee en el codigo)
" data-index="${index}" es el indice del boton  
lo llamo como por ej. .......dataset.index  ejemplo(element.dataset.index)
yo al saber la posicion de cada elemento puedo saber quien es

*/






// ` $ { } ` dentro la Comilla inversa  sirve para anidar 





/**
 * renderInput
 * Recibe 2 parametros
 * pertange: el objeto que obtenemos de cada iteracion
 * index: es el indice de cada objeto que existe dentro del array
 *
 * además tenemos atributos
 * value: va a tomar el valor que exista dentro de percentage.value
 * ojo: recurden que el valor de percentage.value por defecto es igual a ""
 *
 * ahora en este caso queremos que cuando el usuario escriba en el input
 * el boton que estaba seleccion se desmarque
 *
 * como queremos captura lo que el usuario escribe por teclado vamos a usar
 * el evento onkeyup, en este evento vamos a llamar a la funcion `setInputTip`
 * y le vamos a pasar this
 * Recordemos que en este context this = input
 */

// con esto creamos los botones por javascript
function renderInput(percentage, index) {
  return `<input
            type="text"
            value="${percentage.value}"
            data-index="${index}"
            id="input-bill-${index}"
            onkeyup="setInputTip(this)"
            class="outline-none p-2 bg-[#F3F8FB] rounded-md"
            placeholder="Custom"
          />`;
}

/**
 * renderPercentagesButtons
 * Recibe un array de objetos donde esos objetos son para hacer
 * el render de un boton o un input
 *
 */
function renderPercentagesButtons(percentagesArray) {
  // Paso1: Limpiamos el container para evitar que se dupliquen los elementos
  containerPercentages.innerHTML = "";

  // Paso2: Iteramos el array que recibimos para poner pintar un boton o un inputs
  percentagesArray.forEach(function (percentage, index) {
    /**
     * En este la variable `html` la cual puede llamarse como ustedes quieran
     * toma su valor en base a una condicion la cual depdende `type` para
     * llamar a una funcion u otra
     */
    const html =
      percentage.type === "button"
        ? renderButton(percentage, index)
        : renderInput(percentage, index);
    /**
     * En el contenedor vamos a adicionar cada elemento por ende usamos
     * el opera +=, si no usamos este operador y solo colocamos = que pasa, que
     * se reemplazaria en vez de adicionar
     */
    containerPercentages.innerHTML += html;
    //                             += significa addizione 
  });
}

// Llamamos a la funcion para que cuando la web cargue pinte los boton por defecto
renderPercentagesButtons(percentages);




/*

// esempio:  addizione

let suma = 0
suma = suma + 2
console.log(suma)
// 2


let suma = 0
suma += 2    (+= significa addizione)
console.log(suma)
 // 2

let suma = 0
suma += 2
suma += 3
console.log(suma)
// 5


*/