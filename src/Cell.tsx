import { useState } from "react";
import InsertFigureCell from "./logic/InsertFigureCell";
import CheckWinner from "./logic/CheckWinner";

export default function Cell(props: { id: string }) {
  const [disabled, setDisabled] = useState(false);
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    var x = CheckWinner();

    if (!disabled) {
      button.textContent = InsertFigureCell(button.id);
      setDisabled(true);
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
