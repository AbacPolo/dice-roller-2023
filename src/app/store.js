import { configureStore } from "@reduxjs/toolkit";
import controlPanelReducer from "../features/controlPanel/controlPanelSlice";

export const store = configureStore({
  reducer: {
    controlPanel: controlPanelReducer,
  },
});
