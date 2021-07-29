import React from "react";
import { useSelector } from "react-redux";
import CityDisplayCurrent from "./CityDisplayCurrent";
import CityDisplayFiveDays from "./CityDisplayFiveDays";
import FavouriteButton from "./favouriteButton";
import { chosenCityInfo } from "../Redux/Reducers/chosenCitySlice";

function CityDisplay() {
  const chosenCity = useSelector(chosenCityInfo);

  return (
    <>
      <FavouriteButton city={chosenCity} />
      <CityDisplayCurrent chosenCity={chosenCity} />
      <CityDisplayFiveDays chosenCity={chosenCity} />
    </>
  );
}

export default CityDisplay;
