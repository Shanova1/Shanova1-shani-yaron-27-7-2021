import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getSuggestions } from "../Services/requests.js";

export const fetchSuggestions = createAsyncThunk(
  "suggestions/fetchSuggestionsStatus",
  async (userInput, thunkAPI) => {
    try {
      const resp = await getSuggestions(userInput);
      const data = resp.data;
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  data: {},
  status: "idle",
  error: null,
};

const suggestionsSlice = createSlice({
  name: "suggestions",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSuggestions.pending]: (state) => {
      state.status = "loading";
    },
    [fetchSuggestions.fulfilled]: (state, { payload }) => {
      state.status = "succeeded";
      state.data = payload;
    },
    [fetchSuggestions.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default suggestionsSlice.reducer;

export const allSuggestons = (state) => state.suggestions.data;
