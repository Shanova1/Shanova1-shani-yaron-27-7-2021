import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChosenCityContainer from "../ChosenCityContainer/ChosenCityContainer";
import CityFiveDaysWeather from "../CityFiveDaysWeather/CityFiveDaysWeather";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import {
  setChosenCity,
  chosenCityInfo,
} from "../../Redux/Reducers/chosenCitySlice";
import { setGeoLocationState } from "../../Redux/Reducers/currentPositionSlice";
import { fetchCurrentPosCity } from "../../Redux/Reducers/currentPosCitySlice";
import useGeoLocation from "../../Hooks/useGeolocation.js";

function CityContainer() {
  const [dataState, setDataState] = useState(null);
  const dispatch = useDispatch();
  const chosenCity = useSelector(chosenCityInfo);

  // geoPosition
  const currentPosition = useSelector(
    (state) => state.currentPosition.currentPosition
  );
  const geoLocationStatus = useSelector(
    (state) => state.currentPosition.geoLocationState
  );
  const currentPosCityData = useSelector((state) => state.currentPosCity.data);
  const { getCurrentPosition } = useGeoLocation();

  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(() => {
    if (currentPosition) {
      dispatch(fetchCurrentPosCity(currentPosition));
    }
    if (currentPosition === "fail") {
      dispatch(setGeoLocationState(false));
      dispatch(
        setChosenCity({
          cityKey: "215854",
          cityName: "Tel Aviv",
        })
      );
    }
  }, [currentPosition]);

  useEffect(() => {
    if (currentPosCityData && geoLocationStatus) {
      dispatch(
        setChosenCity({
          cityKey: currentPosCityData.Key,
          cityName: currentPosCityData.LocalizedName,
        })
      );
    }
  }, [currentPosCityData]);

  // error handling
  const currentPosCityStatus = useSelector(
    (state) => state.currentPosCity.status
  );

  useEffect(() => {
    setDataState(currentPosCityStatus);
  }, [currentPosCityStatus]);

  return (
    <>
      {dataState === "loading" && (
        <h2 style={{ marginBottom: "300px" }}>Loading...</h2>
      )}
      {dataState === "failed" && (
        <h2 style={{ marginBottom: "300px" }}>Oops! Something went wrong.</h2>
      )}
      {dataState === "succeeded" && (
        <div>
          <FavoriteButton city={chosenCity} />
          <ChosenCityContainer chosenCity={chosenCity} />
          <CityFiveDaysWeather chosenCity={chosenCity} />
        </div>
      )}
    </>
  );
}

export default CityContainer;
