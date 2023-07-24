import React from "react";
import "./Board.css";
import Header from "../../components/header/Header";
import ControlPanel from "../../features/controlPanel/ControlPanel";
import CustomButtonsDisplay from "../../features/customButtonsDisplay/CustomButtonsDisplay";

function Board() {
  return (
    <div className="Board_Container">
      <div className="Board_Wrapper">
        <Header />
        <ControlPanel />
        <CustomButtonsDisplay />
      </div>
    </div>
  );
}

export default Board;
