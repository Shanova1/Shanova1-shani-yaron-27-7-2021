import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [
    { cityKey: "215854", cityName: "Tel Aviv" },
    { cityKey: "349727", cityName: "New York" },
  ],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (city) => city.cityKey !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
