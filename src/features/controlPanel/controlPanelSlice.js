import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRandomIntegers = createAsyncThunk(
  "controlPanel/getRandomIntegers",
  async (diceThrow) => {
    console.log('diceThrow',diceThrow);
    const data = await fetch(`https://www.random.org/integers/?num=${diceThrow.quantity}&min=1&max=${diceThrow.size}&col=${diceThrow.size}&base=10&format=plain&rnd=new`);
    const text = await data.text();
    const filteredText = text.replaceAll(/\t|\n/g, " ").slice(0, -1);
    const arrayOfIntegers = filteredText.split(" ");
    const diceThrowResult = {...diceThrow, value: arrayOfIntegers}
    return diceThrowResult;
  }
);

export const getRANDOMQuota = createAsyncThunk(
  "controlPanel/getRANDOMQuota",
  async () => {
    const data = await fetch(`https://www.random.org/quota/?format=plain`);
    const text = await data.text();
    console.log("quota", text);
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
    customButtons: [
      { name: "test1", value: "2d20" },
      { name: "test2", value: "2d10" },
      { name: "test3", value: "2d6" },
    ],
    quota: '',
    isLoadingQuota: false,
    loadingQuotaHasError: false,
    diceResults: [],
    isLoadingResults: false,
    loadingResultsHasError: false,
    resultsHstory: []
  },
  reducers: {},
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
      })
      .addCase(getRANDOMQuota.fulfilled, (state, action) => {
        state.isLoadingQuota = false;
        state.loadingQuotaHasError = false;
        state.quota = action.payload;
        if (state.diceResults.length > 0) {
          state.resultsHstory = [state.diceResults, ...state.resultsHstory];
          state.diceResults = [];
        }
      })
      .addCase(getRANDOMQuota.rejected, (state) => {
        state.isLoadingQuota = false;
        state.loadingQuotaHasError = true;
        state.posts = {};
      });
  },
});

export const getDefaultButtons = (state) => state.controlPanel.defaultButtons;
export const getCustomButtons = (state) => state.controlPanel.customButtons;
//export const {reducer names} = controlPanelSlice.actions;
export default controlPanelSlice.reducer;
