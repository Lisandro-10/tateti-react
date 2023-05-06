import React from "react";

export default function ChooseFigure(props: { nameFigure: String }) {
  return (
    <div className="chooseFigure">
      <p className="para">{props.nameFigure}</p>
      <input type="radio" className="inputRadio" required />
    </div>
  );
}
