

// ooeradores relacionales: 


let a = 10;
console.log( a > 5);
// true
console.log( a >= 5);
// true

let b = 5;
console.log( b > 5);
// false
console.log( b >= 5);
// true

console.log( b < 5);
// false
console.log( b <= 5);
// true



// igualdad: 


// ESTO NO SE DEVE USAR:  ESTOS PUEDEN CAUSAR ERRORES [ == , != ]

console.log(a == 10);  // igual
// true

console.log(a != 10);  // distinto
// false

// ojo mira lo que pasa: 

// aca va a preguntar solo por el valor ma no por el tipo 
console.log(a == "10"); // dos iguales
// true

// me da un true pero (a) es un number y no una string




// ESTO SE DEVE USAR: [ === , !==]

// aca va a preguntar por el valor y tambien por el tipo
console.log(a === "10");  // tres iguales
// false

// me da un false como deve ser


// aca va a preguntar por el valor y tambien por el tipo
console.log(a !== "10");  //  esclamacion con dos  iguales
// false







