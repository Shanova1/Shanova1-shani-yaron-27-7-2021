import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./Reducers/searchBarSlice";
import suggestionsReducer from "./Reducers/suggestionsSlice";
import currentWeatherReducer from "./Reducers/currentWeatherSlice";
import chosenCityReducer from "./Reducers/chosenCitySlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    suggestions: suggestionsReducer,
    currentWeather: currentWeatherReducer,
    chosenCity: chosenCityReducer,
  },
});
