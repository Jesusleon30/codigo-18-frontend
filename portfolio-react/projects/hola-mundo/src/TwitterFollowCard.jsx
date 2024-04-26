// La base de la reutilización de react de qualquier componente es las propriedades,
//los parámetro Igual que las funciones tienes que poder parametrizarla para interactuar.
//Las props son las propiedades de un componente
// isfollowing es un booleano que por default es true
// le pasamos un elemento de react por props como formatUserName

// las props son immutables y no se deberia modificar ma si lo que podemos hacer es crear una constante como por ejemplo : const userName = `@${userName}`;

// en lugar de usar {name} usaremos {children} esto hara que todo lo que hagamos o metamos dentro del hijo esto se va cambiar todo el contenido dentro del hijo osea dentro el children puedes tener qualquier cosa como un h1 y tantas cosas como siempre hemos usado como en el html. podriamos tener un componente dentro de otro.

// para tener dinamismo en la web debemos cambiar los estados y tenemos que importar un hooks (una utilidad de react) tiene en memoria el estado seria: import{useState} from 'react'

import { useState } from "react";

export function TwitterFollowCard({ children, userName }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "siguiendo" : "seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://img.freepik.com/premium-photo/3d-robots-closeup-cartoon-generative-ai_170984-5733.jpg"
          alt="foto robot"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
