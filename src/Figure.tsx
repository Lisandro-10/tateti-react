import React from "react";

export default function Figure(props: { name: String }) {
  //le falta una banda, es una primera aproximacion
  if (props.name === "circle") {
    return <p>{props.name}</p>;
  } else {
    return <p>{props.name}</p>;
  }
}
