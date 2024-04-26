import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

// ojo : si quiero usar los estado useState tengo que importarlo
import { useState } from "react";

// para poder ver dentro el App en la pagina web tenemos que exportar la function en main
// cuando escrivo <TwitterFollowCard/> en automatico me importa el import { TwitterFollowCard } from './TwitterFollowCard'

/*
 le creo una constante y le pasamos la function
const formattedUserName = (<span>@jesus</span>)
formattedUserName = {formattedUserName}*/

export function App() {
  const [name, setName] = useState("jesus");

  return (
    <section className="App">
      <TwitterFollowCard userName={name}>Jesus Retamozo</TwitterFollowCard>
      <TwitterFollowCard userName="hugo">Hugo Leon</TwitterFollowCard>

      <button onClick={() => setName("leon")}>cambio nombre</button>
    </section>
  );
}
