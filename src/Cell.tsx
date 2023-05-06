import React from "react";

export default function Cell(props: { id: number }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return <button className="cells" onClick={handleClick}></button>;
}
