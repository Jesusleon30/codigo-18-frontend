

// -----   crear tareas y limpiar servidor de tareas---//

// Variables para form e input
// para acceder al form de html
const form = document.querySelector("#form");
const inputTask = document.querySelector("#input-task");
const error = document.querySelector("#error");
const containerTasks = document.querySelector("#container-tasks");

// vamos a crear un array de objetos pero que por defecto esta vacio 
const tasks = [] // array vacio


// ojo evento para button es onclick envez
// evento para los formularios es onsubmit

/*
vamos a capturar el evento onsubmit de form 
arrow function es una function pero escrita de otra manera
 () => {} conocido tambien como  function anonima.
dentro la parenteci puedes scrivir lo que quieras pero como recomendacion 
es bueno usar el nombre event o e 

estados 
1 =  creado
2 = termninado
9  =  eliminado

*/

form.onsubmit = (event) => {
    // evitar que se recargue la pagina
    event.preventDefault();
    // primero vamos a validar que el input este leno
    if (inputTask.value === ""){
        inputTask.classList.add("border","border-red-500");
        error.textContent = "Deve completar este campo";
        // le ponemos un aviso en caso no hayga completado y hayga dado a crear
        return;
    } else { 
        // se limpia borrando el error
        inputTask.classList.remove("border","border-red-500");
        error.textContent = "";
    }


    //  vamos a crear el object de tarea
    const task = {
        id:tasks.length + 1,
        text: inputTask.value,
        status: 1,
        created_at : new Date(),

    }
    // este object tarea de devo agregar al tasks con push
    tasks.push(task);
    // quando termines de agregar estra variable al array vas a tener
    // el render de las tareas osea limpiar 
    renderTasks();
   
};


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
            <button>🗑</button>
          </div>
        </div>
        ` 
    })
}

// en el paragrafo <p>Tarea 1</p> hemos sostituido con <p>${task.text}</p> 
