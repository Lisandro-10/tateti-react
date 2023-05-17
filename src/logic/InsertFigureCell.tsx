import { matchBegin, player1, player2 } from "./InitializeMatch";

export default function InsertFigureCell(id: string) {
  var figureName;
  var figure;

  matchBegin.actualTurn === player1.figureName
    ? (figureName = player1.figureName) && matchBegin.player1Cells?.push(id)
    : (figureName = player2.figureName) && matchBegin.player2Cells?.push(id);

  if (figureName === "cross") {
    figure = "X";
    matchBegin.actualTurn = "circle";
  } else {
    figure = "O";
    matchBegin.actualTurn = "cross";
  }
  return figure;
}
