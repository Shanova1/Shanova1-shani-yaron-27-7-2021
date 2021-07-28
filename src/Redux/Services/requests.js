import axios from "axios";

const apikey = "eNaVVJTGJEZfQF4PbUl8P6LFTcwyrImJ";
const url = "https://dataservice.accuweather.com";

// const cityKey = "215854";

// autocomplete
export const getSuggestions = async (userInput) => {
  return axios.get(
    `${url}/locations/v1/cities/autocomplete?apikey=${apikey}&q=${userInput}`
  );
};

export const getCurrentWeather = async (cityKey) => {
  return axios.get(`${url}/currentconditions/v1/${cityKey}?apikey=${apikey}`);
};

// fiveDaysForecasts
// export const fetchFiveDaysForecasts = async () => {
//   treturn await axios.get(
//       `${url}/forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}`
//     );
// };
