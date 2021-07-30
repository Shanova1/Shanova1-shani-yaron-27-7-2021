import React from "react";

function CurrentCityData(props) {
  const { chosenCity, cityCurrentWeather } = props;

  return (
    <>
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
    </>
  );
}

export default CurrentCityData;
