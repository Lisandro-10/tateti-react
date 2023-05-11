export default class Match {
  actualTurn: string;
  player1Cells: string[];
  player2Cells: string[];

  constructor(actualTurn: string) {
    this.actualTurn = actualTurn;
    this.player1Cells = [];
    this.player2Cells = [];
  }
}
