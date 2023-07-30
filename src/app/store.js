import { configureStore } from "@reduxjs/toolkit";
import controlPanelReducer from "../features/controlPanel/controlPanelSlice";
import boardReducer from "../routes/board/diceBoardSlice";

export const store = configureStore({
  reducer: {
    board: boardReducer,
    controlPanel: controlPanelReducer,
  },
});
