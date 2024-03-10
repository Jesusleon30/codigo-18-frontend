


let edad1 = 10;

if (edad1 > 17){
    console.log('usuario mayor de edad');
} else {
    console.log('usuario menor de edad')
}
//usuario menor de edad

// else me va a dar siempre en cuando la primera condicion no se cumpla





let edad = 17;

if (edad > 17){
    console.log('usuario mayor de edad');
} else if (edad > 13 ){
    console.log ('usuario nesecita estar acompagnado de sus padres')
} else {
    console.log('usuario menor de edad')
}
// usuario nesecita estar acompagnado de sus padres


/* se va a ejecutar desde la primera condicion si no es verdad va a pasar 
a la siguiente ignorando las otras */

// otro esempio: 

let edad2 = 28;

if (edad2 > 17){
    console.log('usuario mayor de edad');
} else if (edad2 > 13 ){
    console.log ('usuario nesecita estar acompagnado de sus padres')
} else {
    console.log('usuario menor de edad')
}
//usuario mayor de edad


let edad3 = 10;

if (edad3 > 17){
    console.log('usuario mayor de edad');
} else if (edad3 > 13 ){
    console.log ('usuario nesecita estar acompagnado de sus padres')
} else {
    console.log('no puede ingresar')
}
// no puede ingresar