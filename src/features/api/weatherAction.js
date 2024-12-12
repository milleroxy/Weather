import {api_key, base_url} from "../../utils/constants.js";
import {putMessage, putWeatherInfo} from "../weather/weatherSlice.js";

export const fetchWeather = (city) => {
    return dispatch => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {
                dispatch(putWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset * 1000
                }))
                dispatch(putMessage(''))
            })
            .catch(e => {
                console.log(e);
                dispatch(putMessage('Enter correct city name'));
            })
    }
}