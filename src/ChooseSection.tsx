import React from "react";
import ChooseFigure from "./components/ChooseFigure";
import InputPlayer from "./components/InputPlayer";

export default function ChooseSection(props: { player: number }) {
  return (
    <div className="chooseSection">
      <p>Nombre Jugador {props.player}</p>
      <InputPlayer />
      <ChooseFigure nameFigure={"Cruz"} />
      <ChooseFigure nameFigure={"Círculo"} />
    </div>
  );
}
