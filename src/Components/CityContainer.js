import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChosenCityContainer from "./ChosenCityContainer";
import CityFiveDaysWeather from "./CityFiveDaysWeather";
import FavouriteButton from "./FavouriteButton";
import {
  setChosenCity,
  chosenCityInfo,
} from "../Redux/Reducers/chosenCitySlice";
import { fetchCurrentPosCity } from "../Redux/Reducers/currentPosCitySlice";
import useGeoLocation from "../Redux/Services/useGeolocation.js";

function CityContainer() {
  const dispatch = useDispatch();

  const chosenCity = useSelector(chosenCityInfo);

  // geoPosition
  const currentPosition = useSelector(
    (state) => state.currentPosition.currentPosition
  );
  const showCurrentPosiotion = useSelector(
    (state) => state.currentPosition.showCurrentPosiotion
  );
  const currentPosCity = useSelector((state) => state.currentPosCity.data);
  const { getCurrentPosition } = useGeoLocation();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    dispatch(fetchCurrentPosCity(currentPosition));
  }, [currentPosition]);

  useEffect(() => {
    if (showCurrentPosiotion) {
      dispatch(
        setChosenCity({
          cityKey: currentPosCity.Key,
          cityName: currentPosCity.LocalizedName,
        })
      );
    }
  }, [currentPosCity]);

  return (
    <>
      <FavouriteButton city={chosenCity} />
      <ChosenCityContainer chosenCity={chosenCity} />
      <CityFiveDaysWeather chosenCity={chosenCity} />
    </>
  );
}

export default CityContainer;
