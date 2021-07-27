import React from "react";
import FavouriteCard from "../Components/FavouriteCard.js";
import { fetchAutocompleteRes } from "../MockResponseData/fetchAutocompleteResponse.js";

const favouriteArray = [fetchAutocompleteRes];

function Favourites(props) {
  return (
    <>
      <h1>Favourites</h1>
      {favouriteArray.map((city) => (
        <FavouriteCard city={city} />
      ))}
    </>
  );
}

export default Favourites;
