import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FavouriteCard from "../Components/FavouriteCard.js";
import FavouriteButton from "../Components/favouriteButton.js";

function Favourites() {
  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <>
      <h1>Favourites</h1>
      <Link to="/">
        {favourites.length &&
          favourites.map((city) => (
            <div>
              <FavouriteButton city={city} key={city.cityKey} />
                <FavouriteCard
                  cityName={city.cityName}
                  cityKey={city.cityKey}
                  key={city.cityKey}
                />
            </div>
          ))}
      </Link>
    </>
  );
}

export default Favourites;
