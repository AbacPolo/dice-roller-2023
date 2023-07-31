import React, { useState } from "react";
import "./ResultCard.css";
import ResultBlock from "../resultBlock/ResultBlock";
import { finalResultCalculator } from "../../helpers/finalResultCalculator";
import { IconButton } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import CreateCustomButton from "../createCustomButton/CreateCustomButton";
import classNames from "classnames";
import { getIsUserLogged } from "../../routes/board/diceBoardSlice";
import { useSelector } from "react-redux";

function ResultCard({ diceResults, first }) {
  const [openDialog, setOpenDialog] = useState(false);
  const isUserLogged = useSelector(getIsUserLogged);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div
      className={classNames("ResultCard_Container", {
        ResultCard_Container_First: first === true,
      })}
    >
      <div className="ResultCard_Wrapper">
        <div className="ResultCard_Header">
          <h3
            className={classNames(
              "ResultCard_Header_Content ResultCard_Header_Title",
              {
                ResultCard_Header_Content_First: first === true,
              }
            )}
          >
            {diceResults[0].diceThrow}
          </h3>
          {isUserLogged ? (
            <div
              className={classNames(
                "ResultCard_Header_Content ResultCard_Header_Save",
                {
                  ResultCard_Header_Content_First: first === true,
                }
              )}
            >
              <IconButton
                color="primary"
                className="Save_Button"
                sx={{ padding: "0px 4px" }}
                onClick={handleOpenDialog}
              >
                <SaveOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
          ) : null}
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
          <p
            className={classNames("EqualSign", {
              EqualSign_First: first === true,
            })}
          >
            =
          </p>
          <p className="Result_Value">
            {diceResults && finalResultCalculator(diceResults)}
          </p>
        </div>
        <CreateCustomButton
          buttonValue={diceResults[0].diceThrow}
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
        />
      </div>
    </div>
  );
}

export default ResultCard;
