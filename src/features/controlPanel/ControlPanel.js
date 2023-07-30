import React, { useState } from "react";
import "./ControlPanel.css";
import { Button, IconButton, TextField } from "@mui/material";
import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  getDefaultButtons,
  getRANDOMQuota,
  getRandomIntegers,
} from "./controlPanelSlice";
import { diceInputFilter } from "../../helpers/diceInputFilter";

function ControlPanel() {
  const [buttonMenu_Open, setButtonMenu_Open] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const defaultButtons = useSelector(getDefaultButtons);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput !== "") {
      setInputError(false);
      const searchInputLength = searchInput.split("+").filter(string => string.includes('d')).length;
      const diceInputFiltered = diceInputFilter(searchInput);
      if (
        diceInputFiltered !== "error" &&
        diceInputFiltered.length !== 0 &&
        diceInputFiltered.length === searchInputLength
      ) {
        dispatch(getRANDOMQuota());
        diceInputFiltered.forEach((diceThrow) => {
          dispatch(getRandomIntegers(diceThrow));
        });
        setSearchInput("");
      } else {
        setInputError(true);
      }
    }
  };

  const handleOnChange = (e) => {
    const searchInputCheck = diceInputFilter(e.currentTarget.value);
    if (searchInputCheck !== "error" || e.currentTarget.value === "") {
      setInputError(false);
      setSearchInput(e.currentTarget.value);
    } else if (searchInputCheck === "error") {
      setInputError(true);
      setSearchInput(e.currentTarget.value);
    }
  };

  const handleButtonClick = (button) => {
    const diceInputFiltered = diceInputFilter(button);
    dispatch(getRANDOMQuota());
    dispatch(getRandomIntegers(diceInputFiltered[0]));
  };

  return (
    <div className="ControlPanel_Container">
      <div className="ControlPanel_Wrapper">
        <form
          className="ControlPanel_InputBox_Container"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic"
            label={!inputError ? "Dice to throw" : "You fumbled the throw"}
            variant="outlined"
            fullWidth
            size="small"
            value={searchInput}
            onChange={handleOnChange}
            error={inputError}
            helperText={
              inputError ? "Incorrect entry. Try with another input." : ""
            }
          />
        </form>
        <div
          className={classNames("ControlPanel_Buttons_Container", {
            ButtonMenu_Open: buttonMenu_Open === true,
          })}
        >
          {defaultButtons.map((button, index) => (
            <Button
              key={index}
              variant="contained"
              disableElevation
              onClick={() => handleButtonClick(button)}
              sx={{lineHeight: 1.5,
              padding: '10px 16px'}}
            >
              {button}
            </Button>
          ))}
        </div>
        <div className="ControlPanel_Display_Container">
          <h2>Predefined Throws</h2>
          <IconButton
            variant="outlined"
            onClick={() => {
              setButtonMenu_Open(buttonMenu_Open ? false : true);
            }}
          >
            {buttonMenu_Open ? (
              <KeyboardArrowUpOutlined />
            ) : (
              <KeyboardArrowDownOutlined />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default ControlPanel;
