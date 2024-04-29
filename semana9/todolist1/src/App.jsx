import { useState } from "react";
import { InputTask, Modal } from "./components";
import { tasks } from "./utils";

export default function App() {
  // es el estado de la lista de tareas
  const [listTasks, setLisTasks] = useState(tasks);

  // es el estado del input
  const [task, setTask] = useState("");

  // function que se encarga de capturar el valor del input
  const handleInputTask = (event) => {
    setTask(event.target.value);
  };

  return (
    <>
      <main className="max-w-md mx-auto p-6">
        <InputTask task={task} handleInputTask={handleInputTask} />
        <section id="container-tasks" className="mt-10"></section>
      </main>
      <Modal open={false} />
    </>
  );
}
