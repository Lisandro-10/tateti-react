import "./App.css";
import React, { ChangeEvent, ReactFragment, useEffect, useState } from "react";

function App() {
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState("");
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [figure1, setFigure1] = useState("blanco.png");
  const [figure2, setFigure2] = useState("blanco.png");
  const [cells1, setCells1] = useState<string[]>([]);
  const [cells2, setCells2] = useState<string[]>([]);
  const [info, setInfo] = useState("");
  const [boardVisibility, setBoardVisibility] = useState("board-disabled");

  const Cell = (props: { id: string }) => {
    const [figure, setFigure] = useState("blanco.png");
    const handleError = (event: React.MouseEvent<HTMLDivElement>) =>
      alert("Deben elegir las dos figuras");
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      const cell: HTMLDivElement = event.currentTarget;

      if (3 > 1) {
        console.log(figure2);
        setFigure(figure2);
        setTurn(!turn);
      }

      // if (turn !== true) {
      //   setFigure(figure1);
      //   setCells1([...cells1, cell.id]);
      //   setTurn(!turn);

      //   console.log(figure);
      // } else {
      //   setFigure(figure2);
      //   setCells2([...cells2, cell.id]);
      //   setTurn(!turn);
      //   console.log(figure);
      // }
      CheckWinner();
    };
    return (
      <div
        className="cells"
        onClick={figure1 === "" && figure2 === "" ? handleError : handleClick}
        id={props.id}
      >
        <img src={figure} alt="" className="figure" />
      </div>
    );
  };

  function CheckWinner() {
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

    var winCheck: Array<boolean>;
    var flag = false;
    winnerCombinatios.some((combination) => {
      if (
        combination.every((a) => {
          winCheck = [cells1.includes(a), cells2.includes(a)];
          return winCheck[0] || winCheck[1];
        })
      ) {
        flag = true;
        winCheck[0]
          ? setWinner("Ganador: Jugador 1")
          : setWinner("Ganador: Jugador 2");
      }
      return flag;
    });

    if ((cells1.length >= 5 || cells2.length >= 5) && winner === "") {
      setWinner("EMPATE");
    }

    if (winner !== "") {
      setBoardVisibility("board-disabled");
    }
    setInfo(winner);
  }

  const Board = () => {
    return (
      <div className={boardVisibility} id="board">
        <div className="row">
          <Cell id={"0"}></Cell>
          <Cell id={"1"}></Cell>
          <Cell id={"2"}></Cell>
        </div>
        <div className="row">
          <Cell id={"3"}></Cell>
          <Cell id={"4"}></Cell>
          <Cell id={"5"}></Cell>
        </div>
        <div className="row">
          <Cell id={"6"}></Cell>
          <Cell id={"7"}></Cell>
          <Cell id={"8"}></Cell>
        </div>
      </div>
    );
  };

  function Header() {
    return (
      <div className="chooseSection form">
        <div className="player">
          <label htmlFor="jugador1">Jugador 1</label>
          <div>
            <label htmlFor="cruz1" className="radioLabel">
              Cruz
            </label>
            <input
              type="radio"
              className="inputRadio"
              name="figura1"
              checked={figure1 === "cruz.png"}
              onClick={() => {
                figure2 === "cruz.png"
                  ? alert("No puede elegir la misma figura")
                  : setFigure1("cruz.png");
              }}
              required
            />
            <label htmlFor="circulo1" className="radioLabel">
              Círculo
            </label>
            <input
              type="radio"
              className="inputRadio"
              name="figura1"
              checked={figure1 === "circulo.png"}
              onClick={() => {
                figure2 === "circulo.png"
                  ? alert("No puede elegir la misma figura")
                  : setFigure1("circulo.png");
              }}
              required
            />
          </div>
        </div>
        <div className="player">
          <label htmlFor="jugador2">Jugador 2</label>
          <div>
            <label htmlFor="cruz2" className="radioLabel">
              Cruz
            </label>
            <input
              type="radio"
              className="inputRadio"
              name="figura2"
              checked={figure2 === "cruz.png"}
              onClick={() => {
                figure1 === "cruz.png"
                  ? alert("No puede elegir la misma figura")
                  : setFigure2("cruz.png");
              }}
              required
            />
            <label htmlFor="circulo2" className="radioLabel">
              Círculo
            </label>
            <input
              type="radio"
              className="inputRadio"
              name="figura2"
              checked={figure2 === "circulo.png"}
              onClick={() => {
                figure1 === "circulo.png"
                  ? alert("No puede elegir la misma figura")
                  : setFigure2("circulo.png");
              }}
              required
            />
          </div>
        </div>
        <ResetButton />
        <GameStarter />
      </div>
    );
  }

  function Monitor() {
    return (
      <div>
        <p className="info">Resultado: {info}</p>
      </div>
    );
  }

  const GameStarter = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
      setBoardVisibility("board");
    return (
      <button className="btn" onClick={handleClick}>
        Iniciar Partida
      </button>
    );
  };

  const ResetButton = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      setFigure1("");
      setFigure2("");
      setCells1([]);
      setCells2([]);
      setBoardVisibility("board");
      setWinner("");
      setInfo("");
    };
    return (
      <button className="btn" onClick={handleClick}>
        Reiniciar Partida
      </button>
    );
  };

  return (
    <div>
      <h1>TA - TE - TI</h1>
      <br />
      <Header />
      <br />

      <Monitor />
      <br />

      <Board />
    </div>
  );
}

export default App;
