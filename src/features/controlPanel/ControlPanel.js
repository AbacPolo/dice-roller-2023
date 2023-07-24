import React, { useState } from "react";
import "./ControlPanel.css";
import { Button, TextField } from "@mui/material";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { getDefaultButtons } from "./controlPanelSlice";
function ControlPanel() {
  const [buttonMenu_Open, setButtonMenu_Open] = useState(false);
  const defaultButtons = useSelector(getDefaultButtons);

  return (
    <div className="ControlPanel_Container">
      <div className="ControlPanel_Wrapper">
        <div className="ControlPanel_InputBox_Container">
          <TextField
            id="outlined-basic"
            label="Dice to throw"
            variant="outlined"
            fullWidth
            size="small"
          />
        </div>
        <div
          className={classNames("ControlPanel_Buttons_Container", {
            ButtonMenu_Open: buttonMenu_Open === true,
          })}
        >
          {defaultButtons.map((button) => (
            <Button variant="outlined">{button}</Button>
          ))}
        </div>
        <div className="ControlPanel_Display_Container">
          <h2>Predefined Throws</h2>
          <Button
            variant="outlined"
            endIcon={
              buttonMenu_Open ? (
                <KeyboardArrowUpOutlined />
              ) : (
                <KeyboardArrowDownOutlined />
              )
            }
            onClick={() => {
              setButtonMenu_Open(buttonMenu_Open ? false : true);
            }}
          >
            {buttonMenu_Open ? "Close" : "Open"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
