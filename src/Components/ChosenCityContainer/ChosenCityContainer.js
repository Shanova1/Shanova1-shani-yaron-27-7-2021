import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  currentWeather,
  fetchCurrentWeather,
} from "../../Redux/Reducers/currentWeatherSlice";
import CurrentCityData from "../CurrentCityData/CurrentCityData";

import { currentWeatherData } from "../../MockResponseData/currentWeather"; // MOCK

function ChosenCityContainer(props) {
  const chosenCity = props.chosenCity;
  // const cityCurrentWeather = useSelector(currentWeather);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchCurrentWeather(chosenCity.cityKey));
  // }, [chosenCity]);

  const cityCurrentWeather = currentWeatherData; // MOCK

  return (
    <>
      {cityCurrentWeather["Temperature"] && (
        <CurrentCityData
          chosenCity={chosenCity}
          cityCurrentWeather={cityCurrentWeather}
        />
      )}
    </>
  );
}

export default ChosenCityContainer;
