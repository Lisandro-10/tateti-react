const WinnerLabel = (props: { winnerName: string }) => {
  return <p className="winnerLabel">GANADOR: {props.winnerName}</p>;
};

export default WinnerLabel;
