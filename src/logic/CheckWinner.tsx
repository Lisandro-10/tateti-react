import { matchBegin } from "./InitializeMatch";

export default function CheckWinner() {
  var winnerCombinatios = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
  ];

  if (
    matchBegin.player1Cells?.length >= 3 ||
    matchBegin.player2Cells?.length >= 3
  ) {
    winnerCombinatios.some((combination) => {
      matchBegin.player1Cells.map((cell) => {
        return combination.includes(cell);
      });
      return false;
    });
  }
  //como se cuando devuelve true para los 3 elementos de la combinacions
}
