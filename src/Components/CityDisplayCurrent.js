import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  currentWeather,
  fetchCurrentWeather,
} from "../Redux/Reducers/currentWeatherSlice";
import { chosenCityInfo } from "../Redux/Reducers/chosenCitySlice";

function CityDisplayCurrent() {
  const cityCurrentWeather = useSelector(currentWeather);
  const chosenCity = useSelector(chosenCityInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentWeather(chosenCity.cityKey));
  }, [chosenCity]);

  const iconNum = cityCurrentWeather.WeatherIcon;
  const iconLink = `https://www.accuweather.com/images/weathericons/${iconNum}.svg`;

  return (
    <>
      { cityCurrentWeather.hasOwnProperty('Temperature') &&
        <div>
        <h2>{chosenCity.cityName}</h2>
      <p>
        {cityCurrentWeather.Temperature.Metric.Value}{" "}
        {cityCurrentWeather.Temperature.Metric.Unit}
      </p>
      <img alt={cityCurrentWeather.WeatherText} src={iconLink} />
      <p>{cityCurrentWeather.WeatherText}</p>
      </div>
      }
    </>
  );
}

export default CityDisplayCurrent;

//   const cityInfo = currentWeatherData.data[0];
//   const iconNum = cityInfo.WeatherIcon;
//   const iconLink = `https://www.accuweather.com/images/weathericons/${iconNum}.svg`;
