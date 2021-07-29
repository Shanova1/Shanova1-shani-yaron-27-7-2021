import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../Redux/Reducers/favouritesSlice";

function FavouriteButton(props) {
  const city = props.city;
  const favourites = useSelector((state) => state.favourites.favourites);
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState("");

  const isFavourite = () => {
    const id = favourites.findIndex(
      (thiCity) => thiCity.cityKey === city.cityKey
    );
    return id !== -1;
  };

  const toggleFavourite = () => {
    const favourite = city;
    isFavourite()
      ? dispatch(removeFavourite(favourite.cityKey))
      : dispatch(addFavourite(favourite));
  };

  useEffect(() => {
    isFavourite() ? setButtonText("Remove") : setButtonText("Add");
  }, [favourites]);

  return (
    <>
      <button onClick={toggleFavourite}>{buttonText}</button>
    </>
  );
}

export default FavouriteButton;
