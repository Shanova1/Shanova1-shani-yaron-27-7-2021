import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  currentWeather,
  fetchCurrentWeather,
} from "../Redux/Reducers/currentWeatherSlice";

function CityDisplayCurrent(props) {
  const chosenCity = props.chosenCity;
  const cityCurrentWeather = useSelector(currentWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (chosenCity.cityKey !== "") {
      dispatch(fetchCurrentWeather(chosenCity.cityKey));
    }
  }, [chosenCity]);

  return (
    <>
      {cityCurrentWeather.hasOwnProperty("Temperature") && (
        <div>
          <h2>{chosenCity.cityName}</h2>
          <p>
            {cityCurrentWeather.Temperature.Metric.Value}{" "}
            {cityCurrentWeather.Temperature.Metric.Unit}
          </p>
          <img
            alt={cityCurrentWeather.WeatherText}
            src={`https://www.accuweather.com/images/weathericons/${cityCurrentWeather.WeatherIcon}.svg`}
          />
          <p>{cityCurrentWeather.WeatherText}</p>
        </div>
      )}
    </>
  );
}

export default CityDisplayCurrent;
