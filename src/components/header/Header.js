import React from "react";
import "./Header.css";
import { IconButton, ThemeProvider } from "@mui/material";
import { AccountCircleOutlined, LoginOutlined } from "@mui/icons-material";
import { theme } from "../../styles/theme";
import logoImage from "../../images/role-playing.png";

function Header() {
  return (
    <ThemeProvider theme={theme}>
      <div className="Header_Container" color="neutral.backgroundColor">
        <div className="Header_Wrapper">
          <IconButton color="primary" className="Login_Button">
            <LoginOutlined />
          </IconButton>
          <div className="Title_Container">
            <h1>DICE ROLLER</h1>
            <img src={logoImage} className="Logo_Image" alt="Logo Dice"></img>
          </div>
          <IconButton color="primary" disabled>
            <AccountCircleOutlined />
          </IconButton>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Header;
