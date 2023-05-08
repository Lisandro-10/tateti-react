import ChooseSection from "./ChooseSection";

export default function GlobalContent() {
  return (
    <div className="chooseSection">
      <ChooseSection name="jugador1" nameLabel="Jugador 1 " id={1} />
      <ChooseSection name="jugador2" nameLabel="Jugador 2 " id={2} />
    </div>
  );
}
