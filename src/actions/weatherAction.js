import {api_key, base_url} from "../utils/constants.js";
export const PUT_WEATHER_INFO = 'PUT_WEATHER_INFO';
export const PUT_MESSAGE = 'PUT_MESSAGE';


export const putWeatherInfo = weatherInfo => {
    return {
        type: PUT_WEATHER_INFO,
        payload: weatherInfo
    }
}

export const putMessage = message => {
    return {
        type: PUT_MESSAGE,
        payload: message
    }
}

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
                    sunset: new Date(data.sys.sunset * 1000)
                }))
                dispatch(putMessage(''))
            })
            .catch(e => {
                console.log(e);
                dispatch(putMessage('Enter correct city name'));
            })
    }
}