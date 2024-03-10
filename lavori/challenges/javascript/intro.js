"miguel" === "migurel";
// igualdad

"miguel" !== "migurel";
// diverso

true && true && true;
// operador  AND

false || true;
// operador  OR

!true;
// operador INOT  lo pasamos al false (darle la vuelta)

//vacio hay dos formas:

null;
// el valor es vacio pero  es definido

undefined;
// el valor undefined es no definido

// numeros bastantes largos:

429753498657354096877777n;
4297534986573540968n; // aca se salvan todos los numeros

// big int puede ser un numero de estrella
// poniedo la n al final asi hacemos que se guarde sin ningun tipo de perdida de detalle
//  sino saldria esto xk hay muchos numeros:
429753498657354096877777;
4.297534986573541e23; // aca no me salvan todos los numeros

Symbol();
// es un simbolo es unico al mundo

let finanzas = 300;
// variable let  se llama finanzas y le dijimos que tiene 300

finanzas = finanzas + 20;
// le reasignamos a finanzas el 300 + 20

const frase = " this is fine";
// este variable no se puede modificar el texto se va a mantener nose va a poder reasignar.

// ejemplos:

let tenemosComidaDentro = true;
if (tenemosComidaDentro) {
  ("cocinar");
}

("cocinar");

/** if  luego la condicion parentesis () devolvera un booleano 
y lo que hemos puesto entre llaves {} es lo que va evaluar si es true 
oppure si el false lo va a ignorar con undefined   **/

let tenemosComidaDentro = false;
if (tenemosComidaDentro) {
  ("cocinar");
}

undefined;

let tenemosComidaDentro = true;
if (tenemosComidaDentro) {
  ("cocinar");
} else {
  ("pitar con un sindo muy fuerte ");
}

("cocinar");

let tenemosComidaDentro = false;
if (tenemosComidaDentro) {
  ("cocinar");
} else {
  ("pitar con un sindo muy fuerte ");
}

("pitar con un sindo muy fuerte ");

//  ramificacion de dos ramas con else en el caso mo tenemoscomidadentro

// esempio lavatrice

const cantidadDeDetergente = 100;

if (cantidadDeDetergente < 10) {
  (" detergente insuficiente ");
} else {
  (" detergente es sufiente ");
}

(" detergente es sufiente ");

const cantidadDeDetergente = 100;

if (cantidadDeDetergente < 10) {
  ("detergente insuficiente");
} else if (cantidadDeDetergente < 20) {
  (" detergente esta casi casi");
} else if (cantidadDeDetergente < 25) {
  ("te falta una chispa");
} else {
  (" todo esta perfecto");
}

("todo esta perfecto");
// else if (o esto) pasa a la siguiente  encuentra otro else if (o esto ) y asi....
// < menor
