import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FavouriteCard from "../../Components/FavouriteCard/FavouriteCard";
import FavouriteButton from "../../Components/FavouriteButton/FavouriteButton";
import { setGeoLocationState } from "../../Redux/Reducers/currentPositionSlice";
import { setChosenCity } from "../../Redux/Reducers/chosenCitySlice";

function Favourites() {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  const handlClick = (city) => {
    dispatch(setGeoLocationState(false));
    dispatch(setChosenCity(city));
  };

  return (
    <>
      <h1>Favourites</h1>

      {favourites.length &&
        favourites.map((city) => (
          <div>
            <FavouriteButton city={city} key={2 + city.cityKey} />
            <button onClick={() => handlClick(city)}>
              <Link to="/">
                <FavouriteCard
                  cityName={city.cityName}
                  cityKey={city.cityKey}
                  key={3 + city.cityKey}
                />
              </Link>
            </button>
          </div>
        ))}
    </>
  );
}

export default Favourites;
