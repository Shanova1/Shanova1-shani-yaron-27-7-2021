import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fiveDaysWeather,
  fetchFiveDaysWeather,
} from "../../Redux/Reducers/fiveDaysWeatherSlice";

import {FiveDaysForecasts} from '../../MockResponseData/fiveDaysForecasts'


function CityFiveDaysWeather(props) {
  // const chosenCity = props.chosenCity;
  // const cityFiveDaysWeather = useSelector(fiveDaysWeather);
  // const dispatch = useDispatch();

  const cityFiveDaysWeather = FiveDaysForecasts; // MOCK


  // useEffect(() => {
  //   if (chosenCity.cityKey) {
  //     dispatch(fetchFiveDaysWeather(chosenCity.cityKey));
  //   }
  // }, [chosenCity]);

  const dayName = (value) => {
    const date = new Date(value);
    const day = date.toString().split(" ")[0];
    return day;
  };

  return (
    <>
      {
      // cityFiveDaysWeather.length && --MOCK
        cityFiveDaysWeather.map((day) => (
          <div key={day.Date}>
            <h3>{dayName(day.Date)}</h3>
            <p>
              {day.Temperature.Minimum.Value}
              {day.Temperature.Minimum.Unit} - {day.Temperature.Maximum.Value}
              {day.Temperature.Maximum.Unit}
            </p>
            <img
              alt={day.Day.IconPhrase}
              src={`https://www.accuweather.com/images/weathericons/${day.Day.Icon}.svg`}
            />
            <p>{day.Day.IconPhrase}</p>
            <img
              alt={day.Day.IconPhrase}
              src={`https://www.accuweather.com/images/weathericons/${day.Night.Icon}.svg`}
            />
            <p>{day.Night.IconPhrase}</p>
          </div>
        ))}
    </>
  );
}

export default CityFiveDaysWeather;
