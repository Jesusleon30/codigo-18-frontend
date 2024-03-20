
// bit digito in binario  0  1


// el operador bitwise va a utilizar la base binaria de los 
// numeros para poder operar


// decimal: 0,1,2,3,4,5,6,7,8,9
// binario: 0,1

// bit: 0 1 
// byte: 8 bits
// byte: 00000000 -> 0
// byte: 00000001 -> 1
// byte: 00000010 -> 2
// byte: 00000011 -> 3
// byte: 00000100 -> 4
// byte: 00000101 -> 5
// byte: 00000110 -> 6


// BITWISE  de OR :


// bitwise de 1 | 3 
/* va a tomar todo el caractere de un byte en este caso 00000001 -> 1 
y va a escrivir un 1 siempre quando el 1 o el 3 tenga un 1.
el ultimo a la dx tiene un --  1 
luego vemos despues viene un 0 siempre del penultimo a la dx pero el 3 tiene 
un 1 asi que 
vamos a colocar un --   11
 despues vemos que ambos solo tienen 0 y no mas 1 

 asi que vamos a commpletar -- 00000011
 */ 
console.log(1|3); // 00000011
// 3 

console.log(1|4); // 00000101
//5


// CREAR UN NUEVO BYTE: 
// en este caso me esta creando un nuevo byte llamado
// byte: 00000111 -> 7 
console.log(3|5); // 00000111
// 7

// ACA NO VA TOMAR UN BYTE O OTRO MA VA A CREAR UN NUEVO BYTE  en base a 1 



// BITWISE AND: 

/* aca lo que vamos a necesitar que ambos bit sean 1 para que marquen 
con 1 osea que compartan el mismo 1 en la misma colunna me dara 00000001 */
// sino me devolvera 00000000


console.log(1 & 3); // 00000001
// 1 
console.log(1 & 4); // 00000000
// 0
console.log(3 & 5); // 00000001
// 1















