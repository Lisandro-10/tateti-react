const WinnerLabel = (props: { winnerName: string }) => {
  console.log("Winner en winnerLabel: " + props.winnerName);
  return <p className="winnerLabel">GANADOR: {props.winnerName}</p>;
};

export default WinnerLabel;
