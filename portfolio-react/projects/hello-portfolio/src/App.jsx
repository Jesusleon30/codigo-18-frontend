import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Counter } from "./components/Counter";

export default function App() {


  const [name, setName] = useState("");

  // handle vendria de manejar seria manejar el input
  const handleInputValue = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div>
        <Header name="Jesus" lastname="Retamozo" />
        <Counter/>
        <h1> hola mundo desde React App.jsx </h1>
        <h3>Inputs</h3>
        <p>name:{name}</p>
        <input type="text" value={name} onChange={handleInputValue} />
        <Footer companyName="Hugo Leon" />
      </div>
    </>
  );
}
