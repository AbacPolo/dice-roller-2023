import { createSlice } from "@reduxjs/toolkit";

export const controlPanelSlice = createSlice({
  name: "controlPanel",
  initialState: {
    defaultButtons: [
      "1d2",
      "1d4",
      "1d6",
      "1d8",
      "1d10",
      "1d12",
      "1d20",
      "1d100",
    ],
  },
  reducers: {},
});

export const getDefaultButtons = (state) => state.controlPanel.defaultButtons;
//export const {reducer names} = controlPanelSlice.actions;
export default controlPanelSlice.reducer;
