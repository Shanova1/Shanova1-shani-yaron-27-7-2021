import React, { useEffect } from "react";
import "./CityFiveDaysWeather.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fiveDaysWeather,
  fetchFiveDaysWeather,
} from "../../Redux/Reducers/fiveDaysWeatherSlice";
import useConvertToF from "../../Hooks/useConvertToF";


import { Card, ListGroup } from "react-bootstrap";

function CityFiveDaysWeather(props) {
  const chosenCity = props.chosenCity;
  const cityFiveDaysWeather = useSelector(fiveDaysWeather);
  const dispatch = useDispatch();

  const fiveDaysFetchStatus = useSelector(
    (state) => state.fiveDaysWeather.status
  );


  useEffect(() => {
    if (chosenCity.cityKey) {
      dispatch(fetchFiveDaysWeather(chosenCity.cityKey));
    }
  }, [chosenCity]);

  const showCelsuis = useSelector((state) => state.temperatureDegree.celcius);
  const { convertToF } = useConvertToF();

  const dayName = (value) => {
    const date = new Date(value);
    const day = date.toString().split(" ")[0];
    return day;
  };

  return (
    <>
      <div className="cards-container">
        {
          cityFiveDaysWeather.length &&
          cityFiveDaysWeather.map((day) => (
            <div key={day.Date} className="weather-card">
              <h3>{dayName(day.Date)}</h3>
              {showCelsuis ? (
                <p className="temperature-range">
                  {day.Temperature.Minimum.Value}
                  {"° C - "}
                  {day.Temperature.Maximum.Value}
                  {"° C"}
                </p>
              ) : (
                <p className="temperature-range">
                  {convertToF(day.Temperature.Minimum.Value)}
                  {"° F - "}
                  {convertToF(day.Temperature.Maximum.Value)}
                  {"° F"}
                </p>
              )}
              <div className="weather-desc">
                <img
                  alt={day.Day.IconPhrase}
                  src={`https://www.accuweather.com/images/weathericons/${day.Day.Icon}.svg`}
                />
                <p>{day.Day.IconPhrase}</p>
              </div>
              <div className="weather-desc">
                <img
                  alt={day.Night.IconPhrase}
                  src={`https://www.accuweather.com/images/weathericons/${day.Night.Icon}.svg`}
                />
                <p>{day.Night.IconPhrase}</p>
              </div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default CityFiveDaysWeather;
