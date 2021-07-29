import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInput } from "../Redux/Reducers/searchBarSlice";
import {
  allSuggestons,
  fetchSuggestions,
} from "../Redux/Reducers/suggestionsSlice";
import { setChosenCity } from "../Redux/Reducers/chosenCitySlice";

function SearchBar() {
  const [showOptions, setShowOptions] = useState(false);

  const userInput = useSelector((state) => state.searchBar.userInput);
  const suggestions = useSelector(allSuggestons);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setUserInput(e.target.value));
  };

  const handleClick = (value) => {
    dispatch(setChosenCity(value));
    setShowOptions(false);
    dispatch(setUserInput(''));
  };

  useEffect(() => {
    if (userInput !== '')
    {dispatch(fetchSuggestions(userInput))};
  }, [userInput]);

  useEffect(() => {
    setShowOptions(true);
  }, [suggestions]);

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
            {
              <ul>
                {showOptions && userInput && suggestions.length
                  ? suggestions.map((city) => (
                      <li
                        key={city.Key}
                        onClick={() => {
                          handleClick({cityKey: city.Key, cityName: city.LocalizedName});
                        }}
                      >
                        {city.LocalizedName}, {city.Country.LocalizedName}
                      </li>
                    ))
                  : null}
              </ul>
            }
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchBar;

