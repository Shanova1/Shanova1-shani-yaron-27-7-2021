import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  currentWeather,
  fetchCurrentWeather,
} from "../../Redux/Reducers/currentWeatherSlice";
import CurrentCityData from "../CurrentCityData/CurrentCityData";

function FavoriteCard(props) {
  const dispatch = useDispatch();
  const cityCurrentWeather = useSelector(currentWeather);
  const city = props;

  const weatherFetchStatus = useSelector(
    (state) => state.currentWeather.status
  );


  useEffect(() => {
    dispatch(fetchCurrentWeather(city.cityKey));
  }, [city.cityKey]);

  return (
    <>
      
        <CurrentCityData
        isFavorite={true}
        chosenCity={city}
        cityCurrentWeather={cityCurrentWeather}
        />

    </>
  );
}

export default FavoriteCard;
