import {useState} from "react";
import {fetchWeather} from "../actions/weatherAction.js";
import {useDispatch} from "react-redux";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(fetchWeather(city))
            setCity('')}}>
            <input onChange={e => setCity(e.target.value)} type="text" value={city} />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;