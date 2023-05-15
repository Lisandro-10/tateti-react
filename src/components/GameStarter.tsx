import React, { useState } from "react";
import InitializeMatch from "../logic/InitializeMatch";

const GameStarter = () => {
  const [disabled, setDisabled] = useState(false);
  const [className, setClassName] = useState("btn-start");
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (InitializeMatch()) {
      setClassName("btn-start-clicked");
      setDisabled(true);
    }
  };
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      Iniciar Partida
    </button>
  );
};

export default GameStarter;
