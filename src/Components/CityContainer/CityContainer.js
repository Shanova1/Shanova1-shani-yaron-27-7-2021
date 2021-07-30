import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChosenCityContainer from "../ChosenCityContainer/ChosenCityContainer";
import CityFiveDaysWeather from "../CityFiveDaysWeather/CityFiveDaysWeather";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import {
  setChosenCity,
  chosenCityInfo,
} from "../../Redux/Reducers/chosenCitySlice";
import { fetchCurrentPosCity } from "../../Redux/Reducers/currentPosCitySlice";
import useGeoLocation from "../../Redux/Services/useGeolocation.js";

import { currentCityMOCK } from "../../MockResponseData/currentCityMOCK"; // MOCK

function CityContainer() {
  // const dispatch = useDispatch();

  // const chosenCity = useSelector(chosenCityInfo);

  const chosenCity = currentCityMOCK; // MOCK

// geoPosition
  // const currentPosition = useSelector(
  //   (state) => state.currentPosition.currentPosition
  // );
  // const geoLocationStatus = useSelector(
  //   (state) => state.currentPosition.geoLocationState
  // );
  // const currentPosCity = useSelector((state) => state.currentPosCity.data);
  // const { getCurrentPosition } = useGeoLocation();

  // useEffect(() => {
  //   getCurrentPosition();
  // }, []);

  // useEffect(() => {
  //   dispatch(fetchCurrentPosCity(currentPosition));
  // }, [currentPosition]);

  // useEffect(() => {
  //   if (geoLocationStatus) {
  //     dispatch(
  //       setChosenCity({
  //         cityKey: currentPosCity.Key,
  //         cityName: currentPosCity.LocalizedName,
  //       })
  //     );
  //   }
  // }, [currentPosCity]);

  return (
    <>
      <FavouriteButton city={chosenCity} />
      <ChosenCityContainer chosenCity={chosenCity} />
      <CityFiveDaysWeather chosenCity={chosenCity} />
    </>
  );
}

export default CityContainer;
