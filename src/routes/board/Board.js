import React from "react";
import "./Board.css";
import Header from "../../components/header/Header";
import ControlPanel from "../../features/controlPanel/ControlPanel";

function Board() {
  return (
    <div className="Board_Container">
      <div className="Board_Wrapper">
        <Header />
        <ControlPanel />
      </div>
    </div>
  );
}

export default Board;
