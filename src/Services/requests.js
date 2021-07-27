import axios from "axios";

const apikey = "M0HhaeFo4CZ2KjxAg5WhVhkdFJ5KqxEV";
const url = "http://dataservice.accuweather.com/";

const city = "tel aviv";

// autocomplete
export const fetchAutocomplete = async () => {
  try {
    const res = await axios.get(
      `${url}locations/v1/cities/autocomplete?apikey=${apikey}&q=${city}`
    );
    const cityKey = await res.data[0].Key;
    const cityName = await res.data[0].LocalizedName;
    return { cityKey: cityKey, cityName: cityName };
  } catch (err) {
    console.error(err);
  }
};

// currentWeather
export const fetchCurrentWeather = async () => {
  try {
    const res = await axios.get(
      `${url}currentconditions/v1/${cityKey}?apikey=${apikey}`
    );
  } catch (err) {
    console.error(err);
  }
};

// fiveDaysForecasts
export const fetchFiveDaysForecasts = async () => {
  try {
    const res = await axios.get(
      `${url}forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}`
    );
  } catch (err) {
    console.error(err);
  }
};
