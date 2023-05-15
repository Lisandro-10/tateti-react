import { useState } from "react";
import InsertFigureCell from "./logic/InsertFigureCell";
import CheckWinner from "./logic/CheckWinner";

export default function Cell(props: { id: string }) {
  const [disabled, setDisabled] = useState(true);
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    if (CheckWinner()) {
      //llamar funcion que anuncie ganador
      setDisabled(true);
    } else {
      button.textContent = InsertFigureCell(button.id);
    }
  };
  return (
    <button
      className="cells"
      onClick={buttonHandler}
      id={props.id}
      disabled={disabled}
    ></button>
  );
}
