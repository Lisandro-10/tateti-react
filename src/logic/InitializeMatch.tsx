import React from "react";
import Match from "../model/Match";
import Player from "../model/Player";
import Cell from "../Cell";

export var matchBegin = new Match(randomTurn());
export var player1 = new Player("");
export var player2 = new Player("");

export default function InitializeMatch() {
  const input1 = document.getElementById("input1") as HTMLInputElement;
  const input2 = document.getElementById("input2") as HTMLInputElement;

  player1.name = input1?.value;
  player2.name = input2?.value;

  if (figureChoose()) {
    //falta habilitar los botones

    return true;
  } else {
    alert("Datos de jugadores incorrectos.");
    return false;
  }
}

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

  //no pueden elegir la misma figura
  if (valueFigure1 === valueFigure2) {
    return false;
  } else {
    if (valueFigure1 === "circle") {
      player1.figureName = valueFigure1;
      player2.figureName = valueFigure2;
    } else {
      player1.figureName = valueFigure2;
      player2.figureName = valueFigure1;
    }
    return true;
  }
}
