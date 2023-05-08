import React from "react";

export default function Cell(props: { id: string; figure: string }) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const buttonId: string = e.currentTarget.id;
  };

  return (
    <button className="cells" onClick={handleClick}>
      {props.figure}
    </button>
  );
}
