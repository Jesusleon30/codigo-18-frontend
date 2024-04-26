import { useState } from "react";
export function Counter() {
  const [counter, setcounter] = useState(0);

  // arrow function
  // const sumar = () => {
  //   setcounter(counter + 1);
  // };

  // function inline
  const sumar = () => setcounter(counter + 1);

  // arrow function
  // const restar = () => {
  //   setcounter(counter - 1);
  // };
  // function inline
  const restar = () => setcounter(counter + 1);

  // reiniciar en ingles seria reboot
  const reiniciar = () => setcounter(0);
  return (
    <div>
      <h2> contador: {counter}</h2>
      <button onClick={sumar}> Sumar </button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={restar}>Restar</button>
      <hr />
    </div>
  );
}
