import React from "react";
import "./CustomButtonsDisplay.css";
import { Button } from "@mui/material";
import { getCustomButtons } from "../controlPanel/controlPanelSlice";
import { useSelector } from "react-redux";

function CustomButtonsDisplay() {
  const customButtons = useSelector(getCustomButtons);

  return (
    <div className="CustomButtonsDisplay_Container">
      <div className="CustomButtonsDisplay_Wrapper">
        <div className="CustomButtons_Container">
          {customButtons.map(({ name, value }) => (
            <Button variant="outlined">{name}</Button>
          ))}
          <Button variant="outlined">+</Button>
        </div>
        <h2>Custom Throws</h2>
      </div>
    </div>
  );
}

export default CustomButtonsDisplay;
