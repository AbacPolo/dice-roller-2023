import React, { useEffect, useState } from "react";
import "./LogInMenu.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  createProfile,
  getUserProfiles,
  logInProfile,
} from "../../routes/board/diceBoardSlice";
import { fetchCustomButtons } from "../../features/controlPanel/controlPanelSlice";
import { ArrowForward } from "@mui/icons-material";

function LogInMenu({ openDialog, handleCloseDialog }) {
  const [userNameInput, setUserNameInput] = useState("");
  const userProfiles = useSelector(getUserProfiles);
  const [createNewProfile, setCreateNewProfile] = useState(false);
  const [signInError, setSignInError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userProfiles.includes(userNameInput)) {
      dispatch(createProfile(userNameInput));
      dispatch(fetchCustomButtons(userNameInput));
      setCreateNewProfile(false);
      handleCloseDialog(false);
      setSignInError(false);
      setUserNameInput("");
    } else {
      setSignInError(true);
    }
  };

  useEffect(() => {
    setSignInError(false);
  }, [userNameInput]);

  const handleProfileSelection = (profile) => {
    dispatch(logInProfile(profile));
    dispatch(fetchCustomButtons(profile));
    handleCloseDialog(false);
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="LogIn Menu"
      className="Dialog_Container"
    >
      {createNewProfile ? (
        <form onSubmit={handleSubmit} className="Dialog_Form">
          <DialogTitle sx={{textAlign: 'center'}}>CREATE NEW PROFILE</DialogTitle>
          <DialogContent dividers={true}>
            <TextField
              id="outlined-basic"
              label="Profile Name"
              variant="outlined"
              fullWidth
              margin="dense"
              size="small"
              onChange={(e) => setUserNameInput(e.currentTarget.value)}
              error={signInError ? true : false}
              helperText={signInError ? "Profile already exists" : ""}
            />
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              variant="outlined"
              onClick={() => setCreateNewProfile(false)}
            >
              Profiles
            </Button>
            <Button variant="outlined" type="submit" value="Submit">
              Sign In
            </Button>
          </DialogActions>
        </form>
      ) : (
        <div className="Dialog_Wrapper">
          <DialogTitle sx={{textAlign: 'center'}}>SELECT A PROFILE</DialogTitle>
          {userProfiles.length > 0 ? (
            <DialogContent dividers={true} className="ProfileButton_Container">
              {userProfiles.map((profile) => (
                <Button
                  variant="contained"
                  onClick={() => handleProfileSelection(profile)}
                >
                  {profile}
                </Button>
              ))}
            </DialogContent>
          ) : (
            <DialogContent dividers={true} className="ProfileButton_Container">
              <Button variant="contained" disabled>
                You have no profiles yet
              </Button>
            </DialogContent>
          )}
          <div className="NewProfileButton_Container">
            <p>
              Need a new profile?
              <Button
                variant="text"
                endIcon={<ArrowForward />}
                onClick={() => setCreateNewProfile(true)}
              >
                Create
              </Button>
            </p>
          </div>
        </div>
      )}
    </Dialog>
  );
}

export default LogInMenu;
