import axios from "axios";

const picApiKey = "w5WLO-9E6XLM_D7IGGns6aCge1FMLWM9_NcubJo747A";

export const getCityPic = async (chosenCity) => {
  const cityNameForPic = chosenCity.cityName.split(" ").join("");
  console.log(cityNameForPic);
  return axios.get(
    `https://api.unsplash.com/photos/random?client_id=${picApiKey}&query=${cityNameForPic}&content_filter=high`
  );
};

