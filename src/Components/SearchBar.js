import React, { useState, useEffect } from "react";
import { autocomplete } from "../MockResponseData/autocomplete.js";
import { useSelector, useDispatch } from "react-redux";
import { setUserInput } from "../Redux/Reducers/searchBarSlice";

function SearchBar(props) {
  const citySuggestions = autocomplete.data;

  const [showOptions, setShowOptions] = useState(false);

  const userInput = useSelector((state) => state.searchBar.userInput);

  const dispatch = useDispatch();

  const  handleInput = (e) => {
    dispatch(setUserInput(e.target.value))
  }

  return (
    <>
      <div>
        <form>
          <input
            type="text"
            placeholder="Enter city name in English"
            value={userInput}
            onChange={handleInput}
          />
          <div>
            <ul>
              {citySuggestions.map((city) => (
                <li key={city.Key}>
                  {city.LocalizedName}, {city.Country.LocalizedName}
                </li>
              ))}
            </ul>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;

// LocalizedName
// Country.LocalizedName
// Key
