import React from "react";
import "./Board.css";
import Header from "../../components/header/Header";
import ControlPanel from "../../features/controlPanel/ControlPanel";
import CustomButtonsDisplay from "../../features/customButtonsDisplay/CustomButtonsDisplay";
import ResultsDisplay from "../../components/resultsDisplay/ResultsDisplay";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@mui/material";

function Board() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Board_Container">
        <div className="Board_Wrapper">
          <Header />
          <ControlPanel />
          <CustomButtonsDisplay />
          <ResultsDisplay />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Board;
