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
    createProfile: (state, action) => {
      state.userProfiles.push(action.payload);
      localStorage.setItem(
        "profiles",
        JSON.stringify(state.userProfiles)
      );
      state.loggedInUser = action.payload;
      state.isUserLogged = true;
    },
    fetchProfiles: (state) => {
      const storedProfiles = JSON.parse(
        localStorage.getItem('profiles')
      );
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
export const { logInProfile, createProfile, fetchProfiles } = boardSlice.actions;
export default boardSlice.reducer;
