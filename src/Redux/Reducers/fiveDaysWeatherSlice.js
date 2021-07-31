import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFiveDaysWeather } from "../Services/requests.js";

export const fetchFiveDaysWeather = createAsyncThunk(
  "fiveDaysWeather/fetchFiveDaysWeatherStatus",
  async (cityKey, thunkAPI) => {
    try {
      const res = await getFiveDaysWeather(cityKey);
      return res.data.DailyForecasts;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  data: [],
  status: null,
  error: null,
};

const fiveDaysWeatherSlice = createSlice({
  name: "fiveDaysWeather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFiveDaysWeather.pending]: (state) => {
      state.status = "loading";
    },
    [fetchFiveDaysWeather.fulfilled]: (state, { payload }) => {
      state.status = "succeeded";
      state.data = payload;
    },
    [fetchFiveDaysWeather.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default fiveDaysWeatherSlice.reducer;

export const fiveDaysWeather = (state) => state.fiveDaysWeather.data;
