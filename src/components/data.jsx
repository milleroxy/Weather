import Form from "./form.jsx";
import Weather from "./weather.jsx";
import {api_key, base_url} from "../utils/constants.js";
import {useDispatch, useSelector} from "react-redux";
import {error, request, success} from "../actions/weatherAction.js";

const Data = () => {
    const { weatherInfo, message } = useSelector((state) => state.weather || { weatherInfo: null, message: '' });
    const dispatch = useDispatch();

    const getWeather = city => {
        dispatch (request(city));

        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {

                dispatch (
                success({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date (data.sys.sunset * 1000)
                }))
            })

        .catch(err => {
            console.log(err);
            dispatch(error(err.message || 'Enter correct city name'));
        })
    }
    return (
        <div>
           <Form getWeather={getWeather}/>
           <Weather message={message} weather={weatherInfo}/>
        </div>
    );
};

export default Data;