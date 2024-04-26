export default function InputTask() {
  return (
    <>
      <form action="" id="form" className="flex justify-between">
        <input
          id="input-task"
          type="text"
          className="w-full border py-2 px-4 rounded-l-md outline-none"
          placeholder="Escribe el titulo de tu tarea "
        />
        <span id="error" className="text-xs text-red-500 mt-1"></span>
        <button className="bg-green-400 px-4 rounded-r-md">Crear</button>
      </form>
    </>
  );
}
