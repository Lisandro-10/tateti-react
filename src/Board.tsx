import React from "react";
import Cell from "./Cell";

export default function Board() {
  return (
    <div className="board">
      <div className="row">
        <Cell id={"0"} figure=""></Cell>
        <Cell id={"1"} figure=""></Cell>
        <Cell id={"2"} figure=""></Cell>
      </div>
      <div className="row">
        <Cell id={"3"} figure=""></Cell>
        <Cell id={"4"} figure=""></Cell>
        <Cell id={"5"} figure=""></Cell>
      </div>
      <div className="row">
        <Cell id={"6"} figure=""></Cell>
        <Cell id={"7"} figure=""></Cell>
        <Cell id={"8"} figure=""></Cell>
      </div>
    </div>
  );
}
