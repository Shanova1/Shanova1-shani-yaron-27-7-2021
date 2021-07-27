import React from 'react';
import { currentWeather } from '../MockResponseData/currentWeather';

function FavouriteCard(props) {
    
    const city = props.city;
    const tempature = currentWeather.data[0].Temperature.Metric;
    
    return (
        <>
        <h2>{city.cityName}</h2>
            <p>The tempature is {tempature.Value} {tempature.Unit}</p>
        </>
    )
};

export default FavouriteCard;