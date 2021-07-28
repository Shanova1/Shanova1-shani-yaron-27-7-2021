import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInput: "",
};

export const searchBarSlice = createSlice({
  name: "searchBar",
  initialState,
  reducers: {
    setUserInput: (state, action) => {
      state.userInput = action.payload;
    },
  },
});

export const { setUserInput } = searchBarSlice.actions;

export default searchBarSlice.reducer;
