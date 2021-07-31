import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInput } from "../../Redux/Reducers/searchBarSlice";
import {
  allSuggestons,
  fetchSuggestions,
} from "../../Redux/Reducers/suggestionsSlice";
import { setChosenCity } from "../../Redux/Reducers/chosenCitySlice";
// import { Card } from "react-bootstrap";
import "./SearchBar.css";
import { Form, ListGroup } from "react-bootstrap";

function SearchBar() {
  const [showOptions, setShowOptions] = useState(false);

  const userInput = useSelector((state) => state.searchBar.userInput);
  const suggestions = useSelector(allSuggestons);

  const suggestionsFetchStatus = useSelector(
    (state) => state.suggestions.status
  );

  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(setUserInput(e.target.value));
  };

  const handleClick = (value) => {
    dispatch(setChosenCity(value));
    setShowOptions(false);
    dispatch(setUserInput(""));
  };

  useEffect(() => {
    if (userInput) {
      dispatch(fetchSuggestions(userInput));
    }
  }, [userInput]);

  useEffect(() => {
    setShowOptions(true);
  }, [suggestions]);

  return (
    <>
      <div className="search-wrapper">
        <Form className="search-bar-form">
          <Form.Group className="mb-3" controlId="formSearch">
            <Form.Control
              size="lg"
              type="text"
              placeholder="Search city name in English"
              value={userInput}
              onChange={handleInput}
              className="search-bar"
            />
          </Form.Group>
        </Form>

        <ListGroup className="options-list-group">
          {showOptions && userInput && suggestions.length
            ? suggestions.map((city) => (
                <ListGroup.Item
                  className="options"
                  key={1 + city.Key}
                  onClick={() => {
                    handleClick({
                      cityKey: city.Key,
                      cityName: city.LocalizedName,
                    });
                  }}
                >
                  {city.LocalizedName}, {city.Country.LocalizedName}
                </ListGroup.Item>
              ))
            : null}
        </ListGroup>
      </div>

      {/* <form className="search-wrapper">
        <input
          type="text"
          placeholder="Enter city name in English"
          value={userInput}
          onChange={handleInput}
          className="search-bar"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="feather-search"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        {
          <div className="suggestions-container">
            <ul className="options">
              {
                showOptions && userInput && suggestions.length 
                ? 
                suggestions.map((city) => (
                  <li
                    key={1 + city.Key}
                    onClick={() => {
                      handleClick({
                        cityKey: city.Key,
                        cityName: city.LocalizedName,
                      });
                    }}
                  >
                    {city.LocalizedName}, {city.Country.LocalizedName}
                  </li>
                ))
                : null 
              }
            </ul>
          </div>
        }
      </form> */}
    </>
  );
}

export default SearchBar;
