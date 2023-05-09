import InsertFigureCell from "./logic/InsertFigureCell";

export default function Cell(props: { id: string }) {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    //     const html = InsertFigureCell();

    //     button.innerHTML = html;
    button.textContent = InsertFigureCell();
  };
  return (
    <button className="cells" onClick={buttonHandler} id={props.id}></button>
  );
  //interesante esta forma de validar, aunque esta validando la varible y no la cell
}
