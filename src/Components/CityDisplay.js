import React from "react";
import { currentWeather } from "../MockResponseData/currentWeather";
import { fetchAutocompleteRes } from "../MockResponseData/fetchAutocompleteResponse";

function CityDisplay(props) {
  const cityInfo = currentWeather.data[0];

  const iconNum = cityInfo.WeatherIcon

  const iconLink = `https://www.accuweather.com/images/weathericons/${iconNum}.svg`


  return (
    <>
      <h2>{fetchAutocompleteRes.cityName}</h2>
      <p>
        {cityInfo.Temperature.Metric.Value} {cityInfo.Temperature.Metric.Unit}
       </p>
       <img alt={cityInfo.WeatherText} src={iconLink} />
       <p>{cityInfo.WeatherText}</p>
        
      
    </>
  );
}

export default CityDisplay;

//
