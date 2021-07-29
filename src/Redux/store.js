import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./Reducers/searchBarSlice";
import suggestionsReducer from "./Reducers/suggestionsSlice";
import currentWeatherReducer from "./Reducers/currentWeatherSlice";
import chosenCityReducer from "./Reducers/chosenCitySlice";
import fiveDaysWeatherReducer from "./Reducers/fiveDaysWeatherSlice";
import favouritesReducer from "./Reducers/favouritesSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    suggestions: suggestionsReducer,
    currentWeather: currentWeatherReducer,
    chosenCity: chosenCityReducer,
    fiveDaysWeather: fiveDaysWeatherReducer,
    favourites: favouritesReducer,
  },
});
