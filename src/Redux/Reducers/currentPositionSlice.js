import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPosition: "",
  geoLocationState: true,
};

const currentPositionSlice = createSlice({
  name: "currentPosition",
  initialState,
  reducers: {
    setCurrentPosition: (state, action) => {
      state.currentPosition = action.payload;
    },
    setGeoLocationState: (state, action) => {
      state.geoLocationState = action.payload;
    },
  },
});

export const { setCurrentPosition, setGeoLocationState } =
  currentPositionSlice.actions;

export default currentPositionSlice.reducer;
