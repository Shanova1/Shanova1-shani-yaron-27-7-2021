import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCurrentPosCity } from "../Services/requests.js";

export const fetchCurrentPosCity = createAsyncThunk(
    "currentPosCity/fetchCurrentPosCityStatus",
    async (currentPosition, thunkAPI) => {
      try {
        const res = await getCurrentPosCity(currentPosition);
        return res.data;
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

  const currentPosCitySlice = createSlice({
    name: "currentPosCity",
    initialState,
    reducers: {},
    extraReducers: {
      [fetchCurrentPosCity.pending]: (state) => {
        state.status = "loading";
      },
      [fetchCurrentPosCity.fulfilled]: (state, { payload }) => {
        state.status = "succeeded";
        state.data = payload;
      },
      [fetchCurrentPosCity.rejected]: (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      },
    },
  });

  
  export default currentPosCitySlice.reducer;
