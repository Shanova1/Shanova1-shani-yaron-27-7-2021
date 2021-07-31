import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [
    { cityKey: "215854", cityName: "Tel Aviv" },
    { cityKey: "349727", cityName: "New York" },
  ],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (city) => city.cityKey !== action.payload
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
