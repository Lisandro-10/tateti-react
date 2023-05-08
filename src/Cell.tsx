export default function Cell() {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    button.innerHTML = "";
  };

  return <button className="cells" onClick={buttonHandler}></button>;
}
