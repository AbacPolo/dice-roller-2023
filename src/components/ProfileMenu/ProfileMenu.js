import React, { useState } from "react";
import "./ProfileMenu.css";
import {
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  ThemeProvider,
} from "@mui/material";
import {
  AccountCircle,
  AccountCircleOutlined,
  DeleteForever,
  Logout,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteProfile,
  getIsUserLogged,
  getLoggedInUser,
  logOutProfile,
} from "../../routes/board/diceBoardSlice";
import { theme } from "../../styles/theme";
import { deleteAllCustomButton } from "../../features/controlPanel/controlPanelSlice";

function ProfileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isUserLogged = useSelector(getIsUserLogged);
  const loggedInUser = useSelector(getLoggedInUser);
  const [deletingProfile, setDeletingProfile] = useState(false);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setDeletingProfile(false);
  };

  const handleDeleteConfirmation = () => {
    setDeletingProfile(true);
  }

  const handleDeleteProfile = () => {
    dispatch(deleteProfile(loggedInUser));
    dispatch(deleteAllCustomButton(loggedInUser));
    handleClose();
  };

  const handleLogOutProfile = () => {
    dispatch(logOutProfile());
    handleClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <IconButton
        color="primary"
        disabled={isUserLogged ? false : true}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AccountCircleOutlined />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        MenuListProps={{
          elevation: 0,
          sx: {
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            width: '170px',
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} sx={{ color: '#0971f1' }}>
          <ListItemIcon>
            <AccountCircle
              fontSize="large"
              color="primary"
              sx={{ color: 'primary', paddingRight: "6px" }}
            />
          </ListItemIcon>
          <h3>{loggedInUser}</h3>
        </MenuItem>
        <Divider />
        <MenuItem onClick={deletingProfile ? handleDeleteProfile : handleDeleteConfirmation} sx={{color: '#d32f2f'}}>
          <ListItemIcon>
            <DeleteForever fontSize="small" color="danger" />
          </ListItemIcon>
          {deletingProfile ? <h4>CONFIRM</h4> : 'Delete Profile'}
        </MenuItem>
        <MenuItem onClick={handleLogOutProfile}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </ThemeProvider>
  );
}

export default ProfileMenu;
