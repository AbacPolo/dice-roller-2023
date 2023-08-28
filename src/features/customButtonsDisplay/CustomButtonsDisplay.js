import React, { useState } from "react";
import "./CustomButtonsDisplay.css";
import { Button, IconButton } from "@mui/material";
import {
  deleteCustomButton,
  getCustomButtons,
  getIsLoadingResults,
  getRANDOMQuota,
  getRandomIntegers,
} from "../controlPanel/controlPanelSlice";
import { useDispatch, useSelector } from "react-redux";

import CreateCustomButton from "../../components/createCustomButton/CreateCustomButton";
import { diceInputFilter } from "../../helpers/diceInputFilter";
import {
  DeleteOutlineOutlined,
  DoneOutlineOutlined,
  EditOutlined,
} from "@mui/icons-material";
import { getLoggedInUser } from "../../routes/board/diceBoardSlice";

function CustomButtonsDisplay() {
  const customButtons = useSelector(getCustomButtons);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);
  const isLoadingResults = useSelector(getIsLoadingResults);
  const loggedInUser = useSelector(getLoggedInUser);
  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleButtonClick = (value) => {
    const diceInputFiltered = diceInputFilter(value);
    dispatch(getRANDOMQuota());
    diceInputFiltered.forEach((diceThrow) => {
      dispatch(getRandomIntegers(diceThrow));
    });
  };

  const handleButtonDelete = (name) => {
    dispatch(deleteCustomButton(name));
  };

  return (
    <div className="CustomButtonsDisplay_Container">
      <div className="CustomButtonsDisplay_Wrapper">
        <div className="CustomButtons_Container">
          {customButtons.map(({ name, value }, index) => (
            <Button
              key={index}
              variant="contained"
              disableElevation={deleteButton ? false : true}
              color={deleteButton ? "error" : "primary"}
              onClick={
                deleteButton
                  ? () =>
                      handleButtonDelete({
                        name: name,
                        loggedInUser: loggedInUser,
                      })
                  : () => handleButtonClick(value)
              }
              endIcon={
                deleteButton ? <DeleteOutlineOutlined fontSize="small" /> : null
              }
              // sx={{ lineHeight: 1.5, padding: "10px 16px" }}
              disabled={isLoadingResults ? true : false}
            >
              {name}
            </Button>
          ))}
        </div>
        <div className="CustomButtons_Menu">
          <Button variant="outlined" onClick={handleOpenDialog}>
            +
          </Button>
          <div className="CustomThrows_Title">
            <h2>Custom Throws</h2>
            {deleteButton ? (
              <IconButton
                aria-label="delete"
                color="primary"
                size="small"
                onClick={() => setDeleteButton(false)}
              >
                <DoneOutlineOutlined fontSize="small" />
              </IconButton>
            ) : (
              <IconButton
                aria-label="delete"
                color="primary"
                size="small"
                onClick={() => setDeleteButton(true)}
              >
                <EditOutlined fontSize="small" />
              </IconButton>
            )}
          </div>
          <CreateCustomButton
            buttonValue={""}
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
          />
        </div>
      </div>
    </div>
  );
}

export default CustomButtonsDisplay;
