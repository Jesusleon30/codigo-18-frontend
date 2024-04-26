import { InputTask, Modal } from "./components";
import { tasks } from "./utils";

export default function App() {
  return (
    <>
      <main className="max-w-md mx-auto p-6">
        <InputTask />
        <section id="container-tasks" className="mt-10"></section>
      </main>
      <Modal open={false} />
    </>
  );
}

// semana 9 react ora 2:00:00