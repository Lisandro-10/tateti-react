import Cell from "./Cell";

export default function Board() {
  //De momento no hace nada esta funcion
  const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    const board: HTMLDivElement = event.currentTarget;
  };
  return (
    <div className="board" id="board" onClick={clickHandler}>
      <div className="row">
        <Cell id={"0"}></Cell>
        <Cell id={"1"}></Cell>
        <Cell id={"2"}></Cell>
      </div>
      <div className="row">
        <Cell id={"3"}></Cell>
        <Cell id={"4"}></Cell>
        <Cell id={"5"}></Cell>
      </div>
      <div className="row">
        <Cell id={"6"}></Cell>
        <Cell id={"7"}></Cell>
        <Cell id={"8"}></Cell>
      </div>
    </div>
  );
}
