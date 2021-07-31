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
import useGeoLocation from "../../Hooks/useGeolocation.js";

function CityContainer() {
  const dispatch = useDispatch();
  const chosenCity = useSelector(chosenCityInfo);

  // geoPosition
  const currentPosition = useSelector(
    (state) => state.currentPosition.currentPosition
  );
  const geoLocationStatus = useSelector(
    (state) => state.currentPosition.geoLocationState
  );
  const currentPosCity = useSelector((state) => state.currentPosCity.data);
  const { getCurrentPosition } = useGeoLocation();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (currentPosition !== "fail") {
      dispatch(fetchCurrentPosCity(currentPosition));
    } else {
      dispatch(
        setChosenCity({
          cityKey: "215854",
          cityName: "Tel Aviv",
        })
      );
    }
  }, [currentPosition]);

  useEffect(() => {
    if (geoLocationStatus) {
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
