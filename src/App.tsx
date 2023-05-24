import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChooseSection from "./components/GlobalContent";
import Match from "./Match";
import InitializeMatch from "./logic/InitializeMatch";
import ErrorPlayer from "./components/ErrorPlayer";

function App() {
  return (
    <BrowserRouter>
      <h1>TA - TE - TI</h1>

      <Routes>
        <Route path="/" element={<ChooseSection />} />
        <Route
          path="/match"
          element={<Match />}
          //     elemen t={InitializeMatch() ? <Match /> : <ErrorPlayer />} // No se porque no anda.
        />
      </Routes>
      <br />
    </BrowserRouter>
  );
}

export default App;
