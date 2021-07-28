import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./Reducers/searchBarSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
  },
});
