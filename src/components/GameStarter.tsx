import React from "react";
import InitializeMatch from "../logic/InitializeMatch";
import DisableElements from "../logic/DisableElements";

export default function GameStarter() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button: HTMLButtonElement = event.currentTarget;
    DisableElements(button);
    InitializeMatch();
  };
  return (
    <button className="btn-start" onClick={handleClick}>
      Iniciar Partida
    </button>
  );
}
