import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: {},
};

export const chosenCitySlice = createSlice({
  name: "chosenCity",
  initialState,
  reducers: {
    setChosenCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setChosenCity } = chosenCitySlice.actions;

export default chosenCitySlice.reducer;

export const chosenCityInfo = (state) => state.chosenCity.city;
