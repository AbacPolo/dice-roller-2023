import React, { useState } from "react";
import "./CustomButtonsDisplay.css";
import { Button } from "@mui/material";
import { getCustomButtons, getRANDOMQuota, getRandomIntegers } from "../controlPanel/controlPanelSlice";
import { useDispatch, useSelector } from "react-redux";

import CreateCustomButton from "../../components/createCustomButton/CreateCustomButton";
import { diceInputFilter } from "../../helpers/diceInputFilter";

function CustomButtonsDisplay() {
  const customButtons = useSelector(getCustomButtons);
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleButtonClick = (value) => {
    const diceInputFiltered = diceInputFilter(value)
    dispatch(getRANDOMQuota());
    diceInputFiltered.forEach((diceThrow) => {
      dispatch(getRandomIntegers(diceThrow));
    });
  };

  return (
    <div className="CustomButtonsDisplay_Container">
      <div className="CustomButtonsDisplay_Wrapper">
        <div className="CustomButtons_Container">
          {customButtons.map(({ name, value }, index) => (
            <Button key={index} variant="outlined" onClick={() => handleButtonClick(value)}>
              {name}
            </Button>
          ))}
        </div>
        <Button variant="outlined" onClick={handleOpenDialog}>
            +
          </Button>
        <h2>Custom Throws</h2>
        <CreateCustomButton buttonValue={''} openDialog={openDialog} handleCloseDialog={handleCloseDialog} />
      </div>
    </div>
  );
}

export default CustomButtonsDisplay;
