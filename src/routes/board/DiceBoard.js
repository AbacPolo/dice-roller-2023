import React from "react";
import "./DiceBoard.css";
import Header from "../../components/header/Header";
import ControlPanel from "../../features/controlPanel/ControlPanel";
import CustomButtonsDisplay from "../../features/customButtonsDisplay/CustomButtonsDisplay";
import ResultsDisplay from "../../components/resultsDisplay/ResultsDisplay";
import { theme } from "../../styles/theme";
import { ThemeProvider } from "@mui/material";
import { useSelector } from "react-redux";
import { getIsUserLogged } from "./diceBoardSlice";

function Board() {
  const isUserLogged = useSelector(getIsUserLogged);
  return (
    <ThemeProvider theme={theme}>
      <div className="Board_Container">
        <div className="Board_Container_Overlay">
        <div className="Board_Wrapper">
          <Header />
          <ControlPanel />
          {isUserLogged ? <CustomButtonsDisplay /> : null}
          <ResultsDisplay />
        </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Board;
