import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentWeather } from "../Services/requests.js";

export const fetchCurrentWeather = createAsyncThunk(
  "currentWeather/fetchCurrentWeatherStatus",
  async (cityKey, thunkAPI) => {
    try {
      const res = await getCurrentWeather(cityKey);
      const data = res.data[0];
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

const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCurrentWeather.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCurrentWeather.fulfilled]: (state, { payload }) => {
      state.status = "succeeded";
      state.data = payload;
    },
    [fetchCurrentWeather.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default currentWeatherSlice.reducer;

export const currentWeather = (state) => state.currentWeather.data;
