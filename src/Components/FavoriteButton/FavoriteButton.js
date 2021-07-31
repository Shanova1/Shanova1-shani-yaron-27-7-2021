import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../Redux/Reducers/favoritesSlice";
import { chosenCityInfo } from "../../Redux/Reducers/chosenCitySlice";
import whiteHeart from "../../assets/white-heart.png";
import blueHeart from "../../assets/blue-heart.png";
import "./FavoriteButton.css";

function FavoriteButton(props) {
  const [buttonText, setButtonText] = useState("");
  const { city } = props;
  const favorites = useSelector((state) => state.favorites.favorites);
  const chosenCity = useSelector(chosenCityInfo);
  const dispatch = useDispatch();

  const isFavorite = () => {
    const id = favorites.findIndex(
      (thiCity) => thiCity.cityKey === city.cityKey
    );
    return id !== -1;
  };

  const toggleFavorite = (e) => {
    e.stopPropagation();
    const favorite = city;
    isFavorite()
      ? dispatch(removeFavorite(favorite.cityKey))
      : dispatch(addFavorite(favorite));
  };

  useEffect(() => {
    isFavorite() ? setButtonText("Remove") : setButtonText("Add");
  }, [favorites, chosenCity]);

  return (
    <>
      <img
        onClick={toggleFavorite}
        alt="fav heart"
        src={isFavorite() ? blueHeart : whiteHeart}
        className="fav-icon"
      />
    </>
  );
}

export default FavoriteButton;