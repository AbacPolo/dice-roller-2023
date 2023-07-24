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
    customButtons: [
      { name: "test1", value: "2d20" },
      { name: "test2", value: "2d10" },
      { name: "test3", value: "2d6" },
    ],
  },
  reducers: {},
});

export const getDefaultButtons = (state) => state.controlPanel.defaultButtons;
export const getCustomButtons = (state) => state.controlPanel.customButtons;
//export const {reducer names} = controlPanelSlice.actions;
export default controlPanelSlice.reducer;
