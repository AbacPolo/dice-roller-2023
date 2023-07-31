import React, { useState } from "react";
import "./Header.css";
import { IconButton } from "@mui/material";
import { LoginOutlined } from "@mui/icons-material";
import logoImage from "../../images/role-playing.png";
import { fetchProfiles } from "../../routes/board/diceBoardSlice";
import {  useDispatch} from "react-redux";
import LogInMenu from "../logInMenu/LogInMenu";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

function Header() {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useDispatch();

  const handleOpenDialog = () => {
    dispatch(fetchProfiles());
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="Header_Container" color="neutral.backgroundColor">
      <div className="Header_Wrapper">
        <IconButton
          color="primary"
          className="Login_Button"
          onClick={handleOpenDialog}
        >
          <LoginOutlined />
        </IconButton>
        <div className="Title_Container">
          <h1>DICE ROLLER</h1>
          <img src={logoImage} className="Logo_Image" alt="Logo Dice"></img>
        </div>
        <ProfileMenu />
        <LogInMenu
          openDialog={openDialog}
          handleCloseDialog={handleCloseDialog}
        />
      </div>
    </div>
  );
}

export default Header;
