import React from "react";

export default function InputPlayer(props: {
  label: string;
  name: string;
  value?: string | undefined;
}) {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        className="inputText"
        id={props.name}
        value={props.value}
      />
    </div>
  );
}
