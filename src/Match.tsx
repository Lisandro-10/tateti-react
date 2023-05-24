import { useState } from "react";
import Board from "./components/Board";
import ResetButton from "./components/ResetButton";

const Match = () => {
  const [player1Cells, SetPlayer1Cells] = useState([]);
  const [player1Name, setPlayer1Name] = useState("");
  return (
    <div>
      <Board />
      <br />
      <ResetButton />
    </div>
  );
};

export default Match;
