import axios from "axios";

const apikey = "M0HhaeFo4CZ2KjxAg5WhVhkdFJ5KqxEV";
const url = "https://dataservice.accuweather.com";

const cityKey = '215854'

// autocomplete
export const fetchAutocomplete = async (userInput) => axios.get(
      `${url}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${userInput}`);

// currentWeather
export const fetchCurrentWeather = async () => {
  try {
    const res = await axios.get(
      `${url}/currentconditions/v1/${cityKey}?apikey=${apikey}`
    );
  } catch (err) {
    console.error(err);
  }
};

// fiveDaysForecasts
export const fetchFiveDaysForecasts = async () => {
  try {
    const res = await axios.get(
      `${url}/forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}`
    );
  } catch (err) {
    console.error(err);
  }
};
