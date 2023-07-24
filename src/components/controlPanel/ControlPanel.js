import React from "react";
import "./ControlPanel.css";
import { Button, TextField } from "@mui/material";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

function ControlPanel() {
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
        <div className="ControlPanel_Buttons_Container">
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="outlined">Outlined</Button>
        </div>
        <div className="ControlPanel_Display_Container">
          <Button variant="outlined" endIcon={<KeyboardArrowDownOutlined/>}>See all</Button>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
