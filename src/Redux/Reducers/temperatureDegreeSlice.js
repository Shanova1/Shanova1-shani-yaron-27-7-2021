import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  celcius: true,
};

export const temperatureDegreeSlice = createSlice({
  name: "temperatureDegree",
  initialState,
  reducers: {
    temperatureDegreeToggle: (state, action) => {
      state.celcius = action.payload;
    },
  },
});

export const { temperatureDegreeToggle } = temperatureDegreeSlice.actions;

export default temperatureDegreeSlice.reducer;
