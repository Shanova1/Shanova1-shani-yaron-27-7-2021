import React from "react";
import { autocomplete } from "../Utils/autocomplete.js";

function SearchBar(props) {
  const citySuggestions = autocomplete.data;

  return (
    <>
      <div>
        <form>
          <input type="text" placeholder="Enter city name in English" />
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
