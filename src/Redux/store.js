import { configureStore } from "@reduxjs/toolkit";
import searchBarReducer from "./Reducers/searchBarSlice";
import suggestionsReducer from "./Reducers/suggestionsSlice";
import currentWeatherReducer from "./Reducers/currentWeatherSlice";
import chosenCityReducer from "./Reducers/chosenCitySlice";
import fiveDaysWeatherReducer from "./Reducers/fiveDaysWeatherSlice";
import favouritesReducer from "./Reducers/favouritesSlice";
import currentPositionReducer from "./Reducers/currentPositionSlice";
import currentPosCityReducer from "./Reducers/currentPosCitySlice";
import cityPicReducer from "./Reducers/cityPicSlice";
import temperatureDegreeReducer from "./Reducers/temperatureDegreeSlice";

export const store = configureStore({
  reducer: {
    searchBar: searchBarReducer,
    suggestions: suggestionsReducer,
    currentWeather: currentWeatherReducer,
    chosenCity: chosenCityReducer,
    fiveDaysWeather: fiveDaysWeatherReducer,
    favourites: favouritesReducer,
    currentPosition: currentPositionReducer,
    currentPosCity: currentPosCityReducer,
    cityPic: cityPicReducer,
    temperatureDegree: temperatureDegreeReducer
  },
});
