import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FavouriteCard from "../../Components/FavouriteCard/FavouriteCard";
import FavouriteButton from "../../Components/FavouriteButton/FavouriteButton";
import { setGeoLocationState } from "../../Redux/Reducers/currentPositionSlice";
import { setChosenCity } from "../../Redux/Reducers/chosenCitySlice";
import "./Favourites.css";

function Favourites() {
  
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);

  const handleClick = (city) => {
    dispatch(setGeoLocationState(false));
    dispatch(setChosenCity(city));
  };

  return (
    <>
      <div className="favourites-wrapper">
        <h1 className="favourites-title">Favourites Cities</h1>
        <h4 className="favourites-sub-title">
          Click on city to see five days forecast
        </h4>
        <div className="favourites-cities-grid">
          {favourites.length &&
            favourites.map((city) => (
              <div className="favourite-card-container">
                <div className="favoutire-button-favourite-page">
                  <FavouriteButton city={city} />
                </div>
                <div onClick={() => handleClick(city)}>
                  <Link to="/" className="favourite-link">
                    <FavouriteCard
                      cityName={city.cityName}
                      cityKey={city.cityKey}
                      key={3 + city.cityKey}
                    />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Favourites;
