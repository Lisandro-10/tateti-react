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
        return matchBegin.player1Cells.includes(a);
      })
    ) {
      flag = true;
    }
    return flag;
  });
  console.log("Checkwinner ejecutada: " + flag);
}
