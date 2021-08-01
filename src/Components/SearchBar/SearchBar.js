import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInput } from "../../Redux/Reducers/searchBarSlice";
import {
  allSuggestons,
  fetchSuggestions,
} from "../../Redux/Reducers/suggestionsSlice";
import { setChosenCity } from "../../Redux/Reducers/chosenCitySlice";
import "./SearchBar.css";
import { Form, ListGroup } from "react-bootstrap";

function SearchBar() {
  const [showOptions, setShowOptions] = useState(false);
  const [dataState, setDataState] = useState(null);

  const userInput = useSelector((state) => state.searchBar.userInput);
  const suggestions = useSelector(allSuggestons);
  const dispatch = useDispatch();

  const suggestionsFetchStatus = useSelector(
    (state) => state.suggestions.status
  );

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

  useEffect(() => {
    setDataState(suggestionsFetchStatus);
  }, [suggestionsFetchStatus]);

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

        {dataState === "loading" && (
          <ListGroup className="options-list-group">
            <ListGroup.Item>Loading...</ListGroup.Item>
          </ListGroup>
        )}

        {dataState === "failed" &&
          <Form.Text>
            {userInput &&
            'Oops! Something went wrong.'
            }
          </Form.Text>
        }

        {dataState === "succeeded" && (
          <ListGroup className="options-list-group">
            {showOptions && userInput
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
        )}
      </div>
    </>
  );
}

export default SearchBar;
