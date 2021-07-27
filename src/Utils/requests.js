// autocomplete

const fetchAutocomplete = async () => {
    const res = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${city}`);
    const cityKey = res.data[0].Key;
    return cityKey;
  };


// currentWeather

const fetchCurrentWeather = async () => {
    const res = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${apikey}`);
}


// fiveDaysForecasts

const fetchFiveDaysForecasts = async () => {
        const res = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${apikey}`);
}