

let user = {
    id: 1,
    name:'feliz',
    age: 25,
};



// for ( variablecreada  in object  ){}

// nos da solo la propriedad 
for ( let propriedad in user) {
    console.log(propriedad);
}
// id
//name
// age





// aca le pedimos la propriedad y sus valores
for ( let propriedad in user) {
    console.log(propriedad, user[propriedad]);
}
// id 1
// name feliz
// age 25





// mejor usar el for-of en este caso pero 
//es bueno saber si es k lo vez el for-in en listas


let animales = [ 'tigre' , 'leon', 'gato']

// aca nos da el indice y el elemento del array

for (let indice in animales ) {
    console.log(indice, animales[indice] );
}
// 0 tigre
// 1 leon
// 2 gato










