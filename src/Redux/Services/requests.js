import axios from "axios";

const apikey = "D3e7N0qWIywuS80YLjwrXRM50LxFLX8U";
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
export const getCurrentPosWeather = async (currentPosition) => {
  return axios.get(
    `${url}/locations/v1/cities/geoposition/search?apikey=${apikey}q=${currentPosition}&toplevel=true`
  );
};

// "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=M0HhaeFo4CZ2KjxAg5WhVhkdFJ5KqxEV&q=32.794044%2C34.989571&toplevel=true"
