import React from 'react';
import { currentWeather } from '../Utils/currentWeather';

function CityDisplay(props) {
    
    const tempature = currentWeather.data[0].Temperature.Metric;
    
    return (
        <>
            <p>The tempature is {tempature.Value} {tempature.Unit}</p>
        </>
    )
};

export default CityDisplay;

//