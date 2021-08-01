import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";
import { setGeoLocationState } from "../../Redux/Reducers/currentPositionSlice";
import { setChosenCity } from "../../Redux/Reducers/chosenCitySlice";
import "./Favorites.css";

function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleClick = (city) => {
    dispatch(setGeoLocationState(false));
    dispatch(setChosenCity(city));
  };

  return (
    <>
      <div className="favorites-wrapper">
        <h1 className="favorites-title">Favorites Cities</h1>
        <h4 className="favorites-sub-title">
          Click on city to see five days forecast
        </h4>
        <div className="favorites-cities-grid">
          {favorites.length ? (
            favorites.map((city) => (
              <div className="favorite-card-container">
                <div className="favoutire-button-favorite-page">
                  <FavoriteButton city={city} />
                </div>
                <div onClick={() => handleClick(city)}>
                  <Link to="/" className="favorite-link">
                    <FavoriteCard
                      cityName={city.cityName}
                      cityKey={city.cityKey}
                      key={3 + city.cityKey}
                    />
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="favorite-card-container">
              <h3 className="favorites-sub-title-h3">
                Add some cities to favorites
              </h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Favorites;
