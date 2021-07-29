import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FavouriteCard from "../Components/FavouriteCard.js";
import {removeFavourite} from '../Redux/Reducers/favouritesSlice'

function Favourites() {
  const favourites = useSelector((state) => state.favourites.favourites);

  const dispatch = useDispatch();

  const handleClick = (cityKey) => {
    dispatch(removeFavourite(cityKey))
  }

  return (
    <>
      <h1>Favourites</h1>
      {favourites.length &&
        favourites.map((city) => (
          <div>
            <button onClick={() => handleClick(city.cityKey)}>remove from fav</button>
            <FavouriteCard cityName={city.cityName} cityKey={city.cityKey} />
          </div>
        ))}
    </>
  );
}

export default Favourites;
