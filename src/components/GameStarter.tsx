// import React, { useState } from "react";
// import InitializeMatch from "../logic/InitializeMatch";
import { NavLink } from "react-router-dom";
import InitializeMatch, { matchBegin } from "../logic/InitializeMatch";
import { useEffect } from "react";

const GameStarter = () => {
  //   const [showAlert, setShowAlert] = useState(false);
  //   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //     event.preventDefault();
  //     Tengo que validar las figuras elegidas
  //     if (!InitializeMatch()) {
  //       setShowAlert(true);
  //     } else {
  //       window.location.href = "./match";
  //     }
  //   };
  useEffect(() => {
    matchBegin.player1Cells = [];
  });
  InitializeMatch();
  return (
    <NavLink to="./match" className="btn btn-start">
      Iniciar Partida
    </NavLink>
  );
};

export default GameStarter;
