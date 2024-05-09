import { useState } from "react";
import "./css/index.css";

export default function FooterUno(props) {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <>
      <div className="text ">
        <button
          onClick={handleClick}
          className=" border rounded-full w-[200px] h-[50px]"
        >
          likes {props.hola} {props.lastname} {counter} 
        </button>
      </div>
    </>
  );
}
