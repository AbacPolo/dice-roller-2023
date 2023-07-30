import React, { useState } from "react";
import "./ResultCard.css";
import ResultBlock from "../resultBlock/ResultBlock";
import { finalResultCalculator } from "../../helpers/finalResultCalculator";
import { IconButton } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CreateCustomButton from "../createCustomButton/CreateCustomButton";

function ResultCard({ diceResults }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }
  
  return (
    <div className="ResultCard_Container">
      <div className="ResultCard_Wrapper">
        <div className="ResultCard_Header">
          <h3 className="ResultCard_Header_Content ResultCard_Header_Title">{diceResults[0].diceThrow}</h3>
          <div className="ResultCard_Header_Content ResultCard_Header_Save">
            <IconButton color="primary" className="Save_Button" sx={{padding: '0px 4px'}} onClick={handleOpenDialog}>
              <SaveOutlinedIcon fontSize="small"/>
            </IconButton>
          </div>
        </div>
        <div className="ResultDice_Container">
          {diceResults.map((individualThrow, index) => (
            <ResultBlock
              key={index}
              diceResultsIndex={index}
              individualThrow={individualThrow}
            />
          ))}
        </div>
        <div className="Result_Box">
          <i className="fa-solid fa-equals"></i>
          <p>{diceResults && finalResultCalculator(diceResults)}</p>
        </div>
        <CreateCustomButton buttonValue={diceResults[0].diceThrow} openDialog={openDialog} handleCloseDialog={handleCloseDialog} />
      </div>
    </div>
  );
}

export default ResultCard;
