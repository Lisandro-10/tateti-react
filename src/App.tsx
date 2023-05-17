import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ChooseSection from "./components/GlobalContent";
import Board from "./Board";
import GameStarter from "./components/GameStarter";
import WinnerLabel from "./components/WinnerLabel";

function App() {
  return (
    <BrowserRouter>
      <h1>TA - TE - TI</h1>
      <ChooseSection />

      <GameStarter />

      <WinnerLabel winnerName="" />

      <Board />
    </BrowserRouter>
  );
}

export default App;
