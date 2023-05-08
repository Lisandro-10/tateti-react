import Cell from "./Cell";

export default function Board() {
  return (
    <div className="board">
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
