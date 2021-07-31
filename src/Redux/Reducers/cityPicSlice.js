import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCityPic } from "../Services/cityPicRequest";

export const fetchCityPic = createAsyncThunk(
  "cityPic/cityPicStatus",
  async (chosenCity, thunkAPI) => {
    try {
      const res = await getCityPic(chosenCity);
      return res.data.urls.regular;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  data: "",
  status: null,
  error: null,
};

const cityPicSlice = createSlice({
  name: "cityPic",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCityPic.pending]: (state) => {
      state.status = "loading";
    },
    [fetchCityPic.fulfilled]: (state, { payload }) => {
      state.status = "succeeded";
      state.data = payload;
    },
    [fetchCityPic.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default cityPicSlice.reducer;
