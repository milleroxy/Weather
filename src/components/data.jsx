import Form from "./form.jsx";
import Weather from "./weather.jsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.js";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState("Enter city name");
    const getWeather = city => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(result => result.json())
            .then(data => {

                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date (data.sys.sunset * 1000)
                })
                setMessage('')
            })
        .catch(error => {
            console.log(error);
            setMessage('enter correct city name');
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