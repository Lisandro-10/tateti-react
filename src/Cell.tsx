import InsertFigureCell from "./logic/InsertFigureCell";

export default function Cell(props: { id: string }) {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    button.textContent = InsertFigureCell(button.id);
  };
  return (
    <button className="cells" onClick={buttonHandler} id={props.id}></button>
  );
}
