import InitializeMatch from "../logic/InitializeMatch";

export default function GameStarter() {
  return (
    <button className="btn-start" onClick={InitializeMatch}>
      Iniciar Partida
    </button>
  );
}
