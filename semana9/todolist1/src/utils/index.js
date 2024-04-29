
// esto es una validicion si me retorna un valor o un null 
const validateTasksFromLocalStorage = localStorage.getItem("tasks");

// quiero usarla en qualquier parte entonces le pongo un export
// esto me permite obtener las tareas de localstorage
export let tasks = validateTasksFromLocalStorage
  ? [...JSON.parse(validateTasksFromLocalStorage)]
  : [];

// guardar en localstorage y tasks va a hacer un parametro
// guardar en localstorage las tareas
export function saveTasksInLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
 