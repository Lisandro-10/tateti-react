import Match from "../model/Match";
import Player from "../model/Player";

const matchBegin = new Match(randomTurn());
var player1 = new Player("");
var player2 = new Player("");

export default function InitializeMatch() {
  const input1 = document.getElementById("input1") as HTMLInputElement;
  const input2 = document.getElementById("input1") as HTMLInputElement;

  player1.name = input1?.value;
  player2.name = input2?.value;

  figureChoose();
}

// const randomTurn = () => Math.floor(Math.random() * (1 - 0 + 1))+0

function randomTurn() {
  let arr = ["circle", "cross"];
  let min = 0;
  let max = 1;
  let index = Math.floor(Math.random() * (max - min + 1)) + min;
  return arr[index];
}

function figureChoose() {
  //traigo los grupos de botones

  const radioChecked1 = document.querySelector(
    "input[name = 'jugador1']:checked"
  ) as HTMLInputElement | null;
  const radioChecked2 = document.querySelector(
    "input[name = 'jugador2']:checked"
  ) as HTMLInputElement | null;

  //Deberiamos tener el valor (figura) del boton apretado
  const valueFigure1 = radioChecked1?.value;
  const valueFigure2 = radioChecked2?.value;

  console.log("Valor del boton1: " + radioChecked1);
  console.log("Valor del boton2: " + radioChecked2);
  console.log("Valor del boton1: " + valueFigure1);
  console.log("Valor del boton2: " + valueFigure2);

  //no pueden elegir la misma figura
  if (valueFigure1 === valueFigure2) {
    console.log("No puede elegir la misma figura los dos jugadores.");
  } else {
    if (valueFigure1 === "circle") {
      player1.figureName = valueFigure1;
      player2.figureName = valueFigure2;
    } else {
      player1.figureName = valueFigure2;
      player2.figureName = valueFigure1;
    }
  }
}
