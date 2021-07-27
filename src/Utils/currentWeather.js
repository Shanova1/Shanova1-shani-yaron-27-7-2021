export const currentWeather = {
    "data": [
        {
            "LocalObservationDateTime": "2021-07-26T15:25:00+03:00",
            "EpochTime": 1627302300,
            "WeatherText": "Partly sunny",
            "WeatherIcon": 3,
            "HasPrecipitation": false,
            "PrecipitationType": null,
            "IsDayTime": true,
            "Temperature": {
                "Metric": {
                    "Value": 32.2,
                    "Unit": "C",
                    "UnitType": 17
                },
                "Imperial": {
                    "Value": 90,
                    "Unit": "F",
                    "UnitType": 18
                }
            },
            "MobileLink": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
        }
    ],
    "status": 200,
    "statusText": "OK",
    "headers": {
        "cache-control": "public, max-age=600",
        "content-type": "application/json; charset=utf-8",
        "expires": "Mon, 26 Jul 2021 12:41:21 GMT"
    },
    "config": {
        "url": "http://dataservice.accuweather.com/currentconditions/v1/215854?apikey=M0HhaeFo4CZ2KjxAg5WhVhkdFJ5KqxEV",
        "method": "get",
        "headers": {
            "Accept": "application/json, text/plain, */*"
        },
        "transformRequest": [
            null
        ],
        "transformResponse": [
            null
        ],
        "timeout": 0,
        "xsrfCookieName": "XSRF-TOKEN",
        "xsrfHeaderName": "X-XSRF-TOKEN",
        "maxContentLength": -1,
        "maxBodyLength": -1
    },
    "request": {}
}