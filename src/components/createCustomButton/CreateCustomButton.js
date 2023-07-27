import React, { useEffect, useState } from "react";
import "./CreateCustomButton.css";
import { diceInputFilter } from "../../helpers/diceInputFilter";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { createCustomButton } from "../../features/controlPanel/controlPanelSlice";

function CreateCustomButton({ buttonValue, openDialog, handleCloseDialog }) {
  const [buttonNameInput, setButtonNameInput] = useState("");
  const [nameInputError, setNameInputError] = useState(false);
  const [buttonValueInput, setButtonValueInput] = useState("");
  const [valueInputError, setValueInputError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  if (buttonValue !== "" && buttonValueInput === "") {
    setButtonValueInput(buttonValue);
  }

  useEffect(() => {
    if (
      nameInputError === false &&
      valueInputError === false &&
      buttonNameInput !== "" &&
      buttonValueInput !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [nameInputError, valueInputError, buttonNameInput, buttonValueInput]);

  useEffect(() => {
    if (
      nameInputError === false &&
      valueInputError === false &&
      buttonNameInput !== "" &&
      buttonValueInput !== ""
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [nameInputError, valueInputError, buttonNameInput, buttonValueInput]);

  useEffect(() => {
    if (openDialog === false) {
      setButtonNameInput("");
      setNameInputError(false);
      setButtonValueInput("");
      setValueInputError(false);
    }
  }, [openDialog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseDialog(false);
    dispatch(
      createCustomButton({ name: buttonNameInput, value: buttonValueInput })
    );
    setButtonNameInput("");
    setButtonValueInput("");
  };

  const handleValueChange = (e) => {
    const searchInputCheck = diceInputFilter(e.currentTarget.value);
    if (searchInputCheck !== "error" || e.currentTarget.value === "") {
      setValueInputError(false);
      setButtonValueInput(e.currentTarget.value);
    } else if (searchInputCheck === "error") {
      setValueInputError(true);
      setButtonValueInput(e.currentTarget.value);
    }
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="Create custom button"
      className="Dialog_Container"
    >
      <form onSubmit={handleSubmit} className="Dialog_Form">
        <DialogTitle>Create Custom Button</DialogTitle>
        <DialogContent dividers={true}>
          <TextField
            id="outlined-basic"
            label="Throw Name"
            variant="outlined"
            fullWidth
            margin="dense"
            size="small"
            value={buttonNameInput}
            onChange={(e) => setButtonNameInput(e.currentTarget.value)}
          />
          <TextField
            id="outlined-basic"
            label={!valueInputError ? "Dice to throw" : "You fumbled the throw"}
            variant="outlined"
            fullWidth
            margin="dense"
            size="small"
            value={buttonValueInput}
            onChange={handleValueChange}
            error={valueInputError}
            helperText={
              valueInputError ? "Incorrect entry. Try with another input." : ""
            }
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            type="submit"
            value="Submit"
            disabled={buttonDisabled}
          >
            Create Throw
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default CreateCustomButton;
