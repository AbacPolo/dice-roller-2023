import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    userProfiles: [],
    loggedInUser: "",
    isUserLogged: false,
  },
  reducers: {
    logInProfile: (state, action) => {
      state.loggedInUser = action.payload;
      state.isUserLogged = true;
    },
    logOutProfile: (state) => {
      state.loggedInUser = "";
      state.isUserLogged = false;
    },
    createProfile: (state, action) => {
      state.userProfiles.push(action.payload);
      localStorage.setItem("profiles", JSON.stringify(state.userProfiles));
      state.loggedInUser = action.payload;
      state.isUserLogged = true;
    },
    deleteProfile: (state, action) => {
      state.userProfiles = state.userProfiles.filter(
        (profile) => profile !== action.payload
      );
      localStorage.setItem("profiles", JSON.stringify(state.userProfiles));
      state.loggedInUser = "";
      state.isUserLogged = false;
    },
    fetchProfiles: (state) => {
      const storedProfiles = JSON.parse(localStorage.getItem("profiles"));
      if (storedProfiles) {
        state.userProfiles = storedProfiles;
      } else {
        state.userProfiles = [];
      }
    },
  },
});

export const getUserProfiles = (state) => state.board.userProfiles;
export const getLoggedInUser = (state) => state.board.loggedInUser;
export const getIsUserLogged = (state) => state.board.isUserLogged;
export const {
  logInProfile,
  logOutProfile,
  createProfile,
  deleteProfile,
  fetchProfiles,
} = boardSlice.actions;
export default boardSlice.reducer;
