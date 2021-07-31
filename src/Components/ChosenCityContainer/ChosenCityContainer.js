import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  currentWeather,
  fetchCurrentWeather,
} from "../../Redux/Reducers/currentWeatherSlice";
import CurrentCityData from "../CurrentCityData/CurrentCityData";
import { fetchCityPic } from "../../Redux/Reducers/cityPicSlice";

function ChosenCityContainer(props) {
  const chosenCity = props.chosenCity;
  const cityCurrentWeather = useSelector(currentWeather);
  const dispatch = useDispatch();

  useEffect(() => {
    if (chosenCity.cityKey) {
      dispatch(fetchCurrentWeather(chosenCity.cityKey));
      dispatch(fetchCityPic(chosenCity));
    }
  }, [chosenCity]);

  return (
    <>
      <CurrentCityData
        chosenCity={chosenCity}
        cityCurrentWeather={cityCurrentWeather}
      />
    </>
  );
}

export default ChosenCityContainer;
