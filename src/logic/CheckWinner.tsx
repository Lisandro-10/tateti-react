import { matchBegin, player1, player2 } from "./InitializeMatch";

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

  var winCheck: Array<boolean>;
  var winner: string = "";
  var flag = false;
  winnerCombinatios.some((combination) => {
    if (
      combination.every((a) => {
        winCheck = [
          matchBegin.player1Cells.includes(a),
          matchBegin.player2Cells.includes(a),
        ];
        console.log("El wincheck: " + winCheck);
        return winCheck[0] || winCheck[1];
      })
    ) {
      flag = true;
    }
    winCheck[0] ? (winner = player1.name) : (winner = player2.name);
    //InsertWinner(winner);
    return flag;
  });
  console.log("Ganador? " + winner);
  return winner;
}
