import React, { useEffect, useState } from "react";
import "./CurrentCityData.css";
import { useSelector, useDispatch } from "react-redux";
// import { fetchCityPic } from "../../Redux/Reducers/cityPicSlice";
import useConvertToF from "../../Hooks/useConvertToF";

function CurrentCityData(props) {
  const { chosenCity, cityCurrentWeather, isFavourite } = props;
  // const [cityBackground, setCityBackground] = useState(false);
  // const dispatch = useDispatch();
  // const cityPicData = useSelector((state) => state.cityPic.data);
  // const cityPicDataStatus = useSelector((state) => state.cityPic.status);

  // useEffect(() => {
  //   if (cityBackground === false) {
  //     dispatch(fetchCityPic(chosenCity));
  //     setCityBackground(true);
  //   }
  // }, []);

  const showCelsuis = useSelector((state) => state.temperatureDegree.celcius);
  const { convertToF } = useConvertToF();

  return (
    <>
      <div
        className={`${
          isFavourite ? "city-data-wrapper-favourite" : "city-data-wrapper"
        }`}
      >
        <h2 className="city-name">{chosenCity.cityName}</h2>
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
    </>
  );
}

export default CurrentCityData;

// style={{ 'background-image': `url(${cityPicData})`, 'opacity': 0.8}
