
/**
 * 
 * 
 * id de los button para poder filtrar y asi poder elimninar las tareas
 * 
 * 
 */


// Variables para form e input
// para acceder al form de html
const form = document.querySelector("#form");
const inputTask = document.querySelector("#input-task");
const error = document.querySelector("#error");
const containerTasks = document.querySelector("#container-tasks");

// si quiero obtener algo de localstorage y eso no existe este retorna null
// pasa que esta variable puede ser un string o un null 
const validateTasksFromLocalStorage = localStorage.getItem("tasks");

// aca le decimos si la variabile validateTasksFromLocalStorage existe crea un string 
// una copia en localstorage sino retorna un array vacio si es null
let tasks = validateTasksFromLocalStorage 
? [...JSON.parse(validateTasksFromLocalStorage)] : [];
// le cambiamos de const a let para poder cambiar su valor 
//   function deleteTask(id){
//         tasks = tasks.filter((task) => task.id !== id)};

/* ojo: 
cuando tenemos codigo duplicado  como en este caso 
 form.onsubmit = (event) =>{}  y  inputTask.onkeyup = (event) =>{} 
debemos crear una function
*/
// creo mi function 
function validateIfInputIsEmpty(){
    if (inputTask.value === ""){
        inputTask.classList.add("border","border-red-500");
        error.textContent = "Deve completar este campo";
        // le ponemos un aviso en caso no hayga completado y hayga dado a crear
        return false;
    } else { 
        // se limpia borrando el error
        inputTask.classList.remove("border","border-red-500");
        error.textContent = "";
        return true;
    }
}

// el localstorage se guarda solo string
// JSON.stringify convierte un object en string
function saveTasksInLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }



// eliminamos esto porque este codigo se repite y ponemos
inputTask.onkeyup = () => validateIfInputIsEmpty ();
// soporta solo una linea de codigo
// allora uso arroy function de forma inline
/*
estados 
1 =  creado
2 = termninado
9  =  eliminado
*/

// aca modificamos el input 

form.onsubmit = (event) => {
    // evitar que se recargue la pagina
    event.preventDefault();

    // ahora sera:
    if (!validateIfInputIsEmpty()) return;


    //  vamos a crear el object de tarea
    const task = {
        id: tasks.length + 1,
        text: inputTask.value,
        status: 1,
        created_at: new Date(),
      };
    // este object tarea de devo agregar al tasks con push
    tasks.push(task);

    inputTask.value = "";
    // limpiar el input una vez creada 
    
    // antes de hacer un render le digo que lo guarde en localstorage
    saveTasksInLocalStorage();

    // el render de las tareas osea limpiar 
    renderTasks();
};



// --- creamos un filter para la informazion ----
function deleteTask(id){
    tasks = tasks.filter((task) => task.id !== id);
    // aca quiero el tasks que sea diferente al id 
    // filter retorna un array y siempre una condicion
    // guardar el localstorage
    saveTasksInLocalStorage(); 
    // render para que vuelva a pintar las tareas
    renderTasks();

// console.log(id);

}



// creamos una function 
function renderTasks (){
    // paso 1: limpiar container
    containerTasks.innerHTML = "";
    // que variable vamos a usar para listar las tareas
    // paso 2: iterar a tasks
    tasks.forEach((task) => {
        // cuando estamos literando queremos adicionar elemento a containerTasks
        // operador de adicion +=
        // `${}` combinar variables mas string se llama template string
        containerTasks.innerHTML += `
        <div class="flex justify-between px-4 py-3 bg-white rounded-md">
          <p>${task.text}</p> 
          <div class="flex gap-5">
            <button>✔</button>
            <button>✏</button>
            <button onclick = "deleteTask (${task.id})">🗑</button>
          </div>
        </div>
        ` 
    })
};
// en el paragrafo <p>Tarea 1</p> hemos sostituido con <p>${task.text}</p> 

// <button onclick = "deleteTask (${task.id})">🗑</button> asi reconocemos ogni id rispetto ad un button

renderTasks();






























