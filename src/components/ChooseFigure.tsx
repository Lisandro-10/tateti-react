import React from "react";

export default function ChooseFigure(props: { nameFigure: String }) {
  return (
    <div>
      <p>{props.nameFigure}</p>
      <input type="radio" className="inputRadio" />
    </div>
  );
}
