import React from "react";
import ChooseFigure from "./ChooseFigure";

export default function ChooseSection(props: { player: number }) {
  return (
    <div>
      <p>Jugador {props.player}</p>
      <input type="text" name="player" className="inputPlayer" />
      <ChooseFigure nameFigure={"Cruz"} />
      <ChooseFigure nameFigure={"Círculo"} />
    </div>
  );
}
