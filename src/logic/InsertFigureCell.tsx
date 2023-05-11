import { matchBegin, player1, player2 } from "./InitializeMatch";

export default function InsertFigureCell(id: string) {
  var turn = matchBegin.actualTurn;
  var figureName;
  var figure;
  console.log("Primer actual turn: " + turn);
  console.log("Figure jug 1: " + player1.figureName);
  console.log("Figure jug 2: " + player2.figureName);

  turn === player1.figureName
    ? (figureName = player1.figureName) && matchBegin.player1Cells?.push(id)
    : (figureName = player2.figureName) && matchBegin.player1Cells?.push(id);

  if (figureName === "cross") {
    figure = "X";
    matchBegin.actualTurn = "circle";
  } else {
    figure = "O";
    matchBegin.actualTurn = "cross";
  }

  console.log("Turno nuevo: " + matchBegin.actualTurn);
  console.log("Figura devuelta: " + figure);
  return figure;
  // "<p class='figure-para'>X</p>";
}
