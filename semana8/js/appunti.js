// Arroy function Inline

/*
este tipo de arrow tiene la function de retonar algo de forma implicita
*/

// function 
function suma(n1, n2) {
    return n1 + n2
  }
  
  // arrow function
  function suma2(n1,n2) => {
    return n1 + n2
  }
  
  // arrow function inline
  const suma3 = (n1 + n2 ) => n1 + n2
  // soporta solo una sola linea
  // de codigo allora uso arroy function de forma inline
  // la freccia se sobre-entiende que es return
  





  // eliminar -- filter ---

const numeros = [ 1,2,3,4,5,6,7]

// eliminar los numeros que sean pares
const numerosImpares = numeros.filter(numero => numero % 2 !== 0 )

console.log(numerosImpares)
// [ 1, 3, 5, 7 ]




const tasks = [
  {
    "id": 1,
    "text": "limpiar cuarto",
    "status": 1,
    "created_at": "2024-03-21T03:56:16.901Z"
  },
  {
    "id": 2,
    "text": "sadasd",
    "status": 1,
    "created_at": "2024-03-21T03:56:18.465Z"
  },
  {
    "id": 4,
    "text": "Prueba",
    "status": 1,
    "created_at": "2024-03-21T03:56:18.465Z"
  }
]

// const filterTask = tasks.filter(function (task) {
//   return task.id !== 1
// });


// arroy function
const filterTask = tasks.filter((task) => task.id !== 1);


console.log(filterTask)
// si es true me retorna el object