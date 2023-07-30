import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRandomIntegers = createAsyncThunk(
  "controlPanel/getRandomIntegers",
  async (diceThrow) => {
    const data = await fetch(
      `https://www.random.org/integers/?num=${diceThrow.quantity}&min=1&max=${diceThrow.size}&col=${diceThrow.quantity}&base=10&format=plain&rnd=new`
    );
    const text = await data.text();
    const filteredText = text.replaceAll(/\t|\n/g, " ").slice(0, -1);
    const arrayOfIntegers = filteredText.split(" ").map(function (item) {
      return parseInt(item, 10);
    });
    const diceThrowResult = { ...diceThrow, value: arrayOfIntegers };
    return diceThrowResult;
  }
);

export const getRANDOMQuota = createAsyncThunk(
  "controlPanel/getRANDOMQuota",
  async () => {
    const data = await fetch(`https://www.random.org/quota/?format=plain`);
    const text = await data.text();
    console.log("quota", text);
    return text;
  }
);

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
    customButtons: [],
    quota: "",
    isLoadingQuota: false,
    loadingQuotaHasError: false,
    diceResults: [],
    isLoadingResults: false,
    loadingResultsHasError: false,
    resultsHstory: [],
  },
  reducers: {
    createCustomButton: (state, action) => {
      state.customButtons = [
        ...state.customButtons,
        { name: action.payload.name, value: action.payload.value },
      ];
    },
    deleteCustomButton: (state, action) => {
      state.customButtons = state.customButtons.filter(button => button.name !== action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRandomIntegers.pending, (state) => {
        state.isLoadingResults = true;
        state.loadingResultsHasError = false;
      })
      .addCase(getRandomIntegers.fulfilled, (state, action) => {
        state.isLoadingResults = false;
        state.loadingResultsHasError = false;
        state.diceResults = [...state.diceResults, action.payload];
      })
      .addCase(getRandomIntegers.rejected, (state) => {
        state.isLoadingResults = false;
        state.loadingResultsHasError = true;
        state.diceResults = [];
      })
      .addCase(getRANDOMQuota.pending, (state) => {
        state.isLoadingQuota = true;
        state.loadingQuotaHasError = false;
        if (state.diceResults.length > 0) {
          state.resultsHstory = [state.diceResults, ...state.resultsHstory];
          state.diceResults = [];
        }
      })
      .addCase(getRANDOMQuota.fulfilled, (state, action) => {
        state.isLoadingQuota = false;
        state.loadingQuotaHasError = false;
        state.quota = action.payload;
      })
      .addCase(getRANDOMQuota.rejected, (state) => {
        state.isLoadingQuota = false;
        state.loadingQuotaHasError = true;
      });
  },
});

export const getDefaultButtons = (state) => state.controlPanel.defaultButtons;
export const getCustomButtons = (state) => state.controlPanel.customButtons;
export const getDiceResults = (state) => state.controlPanel.diceResults;
export const getResultsHstory = (state) => state.controlPanel.resultsHstory;
export const { createCustomButton, deleteCustomButton } = controlPanelSlice.actions;
export default controlPanelSlice.reducer;
