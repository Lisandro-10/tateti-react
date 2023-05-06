import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import ChooseSection from "./ChooseSection";
import Board from "./Board";
import GameStarter from "./components/GameStarter";

function App() {
  return (
    <BrowserRouter>
      <h1>TA - TE - TI</h1>
      <ChooseSection player={1} />
      <ChooseSection player={2} />

      <GameStarter />

      <Board />
    </BrowserRouter>
  );
}

export default App;
