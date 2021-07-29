import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favourites: [{ cityKey: "215854", cityName: "Tel Aviv" }, {cityKey:"349727", cityName:"New York"}],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      // Redux Toolkit allows 'mutating' the state. It doesn't actually mutate the state because it uses the immer library
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