import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../../Redux/Reducers/favouritesSlice";
import { chosenCityInfo } from "../../Redux/Reducers/chosenCitySlice";
import whiteHeart from "../../assets/white-heart.png";
import blueHeart from "../../assets/blue-heart.png";
import "./FavouriteButton.css";

function FavouriteButton(props) {
  const [buttonText, setButtonText] = useState("");
  const { city } = props;
  const favourites = useSelector((state) => state.favourites.favourites);
  const chosenCity = useSelector(chosenCityInfo);
  const dispatch = useDispatch();

  const isFavourite = () => {
    const id = favourites.findIndex(
      (thiCity) => thiCity.cityKey === city.cityKey
    );
    return id !== -1;
  };

  const toggleFavourite = (e) => {
    e.stopPropagation();
    const favourite = city;
    isFavourite()
      ? dispatch(removeFavourite(favourite.cityKey))
      : dispatch(addFavourite(favourite));
  };

  useEffect(() => {
    isFavourite() ? setButtonText("Remove") : setButtonText("Add");
  }, [favourites, chosenCity]);

  return (
    <>
      <img
        onClick={toggleFavourite}
        alt="fav heart"
        src={isFavourite() ? blueHeart : whiteHeart}
        className="fav-icon"
      />
    </>
  );
}

export default FavouriteButton;
