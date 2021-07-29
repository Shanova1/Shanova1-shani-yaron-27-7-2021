import React from "react";
import { useSelector } from "react-redux";
import FavouriteCard from "../Components/FavouriteCard.js";

function Favourites() {
  const favourites = useSelector((state) => state.favourites.favourites);

  return (
    <>
      <h1>Favourites</h1>
      {favourites.length &&
        favourites.map((city) => (
          <FavouriteCard cityName={city.cityName} cityKey={city.cityKey} />
        ))}
    </>
  );
}

export default Favourites;
