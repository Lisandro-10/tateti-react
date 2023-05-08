import ChooseSection from "../components/GlobalContent";
import Match from "../model/Match";
import Player from "../model/Player";

export default function InitializeMatch() {
  const input1 = document.getElementById("input1") as HTMLInputElement;
  const name1 = input1?.value;
  const input2 = document.getElementById("input1") as HTMLInputElement;
  const name2 = input2?.value;

  var match = new Match(randomTurn());
  var player1 = new Player(name1);
  var player2 = new Player(name2);
  return 0;
}

function randomTurn() {
  let min = 0;
  let max = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function figureChoose() {
//   //traigo los grupos de botones

//   const radioChecked = document.querySelector(
//     "input[name = 'chooseFigure1']:checked"
//   ) as HTMLInputElement | null;

//   const valueFigure = radioChecked?.value;
//   //A partir de aca podemos ver que figura asignar dependiendo del boton chequeado

//   //chequeo cual eligio cada uno
//   for (let i = 0; i < input1.length; i++) {
//     if (input1[i].checked) {
//       valueFigure1 = input1[i].value;
//       console.log(valueFigure1);
//     }
//   }
//   for (let i = 0; i < input2.length; i++) {
//     if (input2[i].checked) {
//       valueFigure2 = input2[i].value;
//       console.log(valueFigure2);
//     }
//   }

//   //no pueden elegir la misma figura
//   if (valueFigure1 == valueFigure2) {
//     console.log("No puede elegir la misma figura los dos jugadores.");
//   } else {
//     if (valueFigure1 == "circle") {
//       this.player1.figure = this.icons.circle;
//       this.player1.figureName = valueFigure1;
//       this.player2.figure = this.icons.cross;
//       this.player2.figureName = valueFigure2;
//     } else {
//       this.player1.figure = this.icons.cross;
//       this.player2.figure = this.icons.circle;
//       this.player1.figureName = valueFigure1;
//       this.player2.figureName = valueFigure2;
//     }

//     document.getElementById("player-info-1").textContent =
//       this.player1.name + ": " + this.player1.figureName;
//     document.getElementById("player-info-2").textContent =
//       this.player2.name + ": " + this.player2.figureName;

//     for (let i = 0; i < input1.length; i++) {
//       input1[i].disabled = true;
//       input2[i].disabled = true;
//     }
//   }
//}
