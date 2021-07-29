import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  currentWeather,
  fetchCurrentWeather,
} from "../Redux/Reducers/currentWeatherSlice";

function FavouriteCard(props) {
  const dispatch = useDispatch();
  const cityCurrentWeather = useSelector(currentWeather);
  const city = props;
  const iconNum = cityCurrentWeather.WeatherIcon;
  const iconLink = `https://www.accuweather.com/images/weathericons/${iconNum}.svg`;

  useEffect(() => {
    dispatch(fetchCurrentWeather(city.cityKey));
  }, []);

  return (
    <>
      <h2>{city.cityName}</h2>
      {cityCurrentWeather.hasOwnProperty("Temperature") && (
        <div>
          <p>
            {cityCurrentWeather.Temperature.Metric.Value}{" "}
            {cityCurrentWeather.Temperature.Metric.Unit}
          </p>
          <img alt={cityCurrentWeather.WeatherText} src={iconLink} />
          <p>{cityCurrentWeather.WeatherText}</p>
        </div>
      )}
    </>
  );
}

export default FavouriteCard;
