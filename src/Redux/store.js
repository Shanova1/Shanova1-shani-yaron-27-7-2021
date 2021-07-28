import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./Reducers/searchBarSlice";
import suggestionsReducer from "./Reducers/suggestionsSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    suggestions: suggestionsReducer,
  },
});
