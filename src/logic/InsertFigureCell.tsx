import CheckWinner from "./CheckWinner";
import { matchBegin, player1, player2 } from "./InitializeMatch";
import Match from "../model/Match";

export default function InsertFigureCell(id: string) {
  var turn = matchBegin.actualTurn;
  var figureName;
  var figure;

  turn === player1.figureName
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
