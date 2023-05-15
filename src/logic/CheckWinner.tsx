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

  var flag = false;
  winnerCombinatios.some((combination) => {
    if (
      combination.every((a) => {
        var winCheck = [
          matchBegin.player1Cells.includes(a),
          matchBegin.player2Cells.includes(a),
        ];
        return winCheck[0] || winCheck[1];
      })
    ) {
      flag = true;
    }
    return flag;
  });
  return flag;
}
