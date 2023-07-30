import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    userLogIn: false,
  },
  reducers: {
    setLogInState: (state, action) => {
      state.userLogIn = action.payload;
    },
  },
});

export const getUserLogIn = (state) => state.board.userLogIn;
export const { setLogInState } = boardSlice.actions;
export default boardSlice.reducer;
