import axios from "axios";

const apikey = "W3f6dtEqemrg7LGsLtAAvJzQCk1gLwRR";
const url = "https://dataservice.accuweather.com";

// autocomplete
export const getSuggestions = async (userInput) => {
  return axios.get(
    `${url}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${userInput}`
  );
};

// current weather
export const getCurrentWeather = async (cityKey) => {
  return axios.get(`${url}/currentconditions/v1/${cityKey}?apikey=${apikey}`);
};

// fiveDaysForecasts
export const getFiveDaysWeather = async (cityKey) => {
  return axios.get(
    `${url}/forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}&metric=true`
  );
};

// currentPosition weather
export const getCurrentPosCity = async (currentPosition) => {
  return axios.get(
    `${url}/locations/v1/cities/geoposition/search?apikey=${apikey}&q=${currentPosition}&toplevel=true`
  );
};