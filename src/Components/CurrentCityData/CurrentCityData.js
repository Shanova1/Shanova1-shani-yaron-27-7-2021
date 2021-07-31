import React, { useEffect, useState } from "react";
import "./CurrentCityData.css";
import { useSelector } from "react-redux";
import useConvertToF from "../../Hooks/useConvertToF";

function CurrentCityData(props) {
  const [dataState, setDataState] = useState(null);

  const { chosenCity, cityCurrentWeather, isFavourite } = props;
  const weatherFetchStatus = useSelector(
    (state) => state.currentWeather.status
  );

  const showCelsuis = useSelector((state) => state.temperatureDegree.celcius);
  const { convertToF } = useConvertToF();

  useEffect(() => {
    setDataState(weatherFetchStatus);
  }, [weatherFetchStatus]);

  return (
    <>
      <div
        className={`${
          isFavourite ? "city-data-wrapper-favourite" : "city-data-wrapper"
        }`}
      >
        <h2 className={`${
            isFavourite ? "city-name-favourite" : "city-name"
          }`}>{chosenCity.cityName}</h2>
        {dataState === "loading" && <h2>Loading...</h2>}
        {dataState === "failed" && <h2>Oops! Something went wrong.</h2>}
        {dataState === "succeeded" && (
          <div
          className={`${
            isFavourite ? "city-data-card-favourite" : "city-data-card"
          }`}
          >
            {showCelsuis ? (
              <p>
                {cityCurrentWeather.Temperature.Metric.Value}
                {"° C"}
              </p>
            ) : (
              <p>
                {convertToF(cityCurrentWeather.Temperature.Metric.Value)}
                {"° F"}
              </p>
            )}
            <div className="temperature-desc">
              <img
                alt={cityCurrentWeather.WeatherText}
                className={`${
                  isFavourite ? "fav-weather-img" : "current-weather-img"
                }`}
                src={`https://www.accuweather.com/images/weathericons/${cityCurrentWeather.WeatherIcon}.svg`}
              />
              <p>{cityCurrentWeather.WeatherText}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CurrentCityData;

// style={{ 'background-image': `url(${cityPicData})`, 'opacity': 0.8}
