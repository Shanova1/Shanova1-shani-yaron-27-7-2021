import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  currentWeather,
  fetchCurrentWeather,
} from "../../Redux/Reducers/currentWeatherSlice";
import CurrentCityData from "../CurrentCityData/CurrentCityData";

function FavouriteCard(props) {
  const dispatch = useDispatch();
  const cityCurrentWeather = useSelector(currentWeather);
  const city = props;

  useEffect(() => {
    dispatch(fetchCurrentWeather(city.cityKey));
  }, [city.cityKey]);

  return (
    <>
      {cityCurrentWeather["Temperature"] && (
        <CurrentCityData
          chosenCity={city}
          cityCurrentWeather={cityCurrentWeather}
        />
      )}
    </>
  );
}

export default FavouriteCard;
