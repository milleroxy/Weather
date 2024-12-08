import {useState} from "react";

const Form = ({getWeather}) => {
    const [city, setCity] = useState('')

    const getCity =(e) => {
        e.preventDefault();
        getWeather(city);
        setCity('')
    }

    return (
        <form onSubmit={getCity}>
           <input onChange={e => setCity(e.target.value.trim())} type="text" value={city.toUpperCase()}/>
            <button type="submit">Get weather</button>
        </form>
    );
};

export default Form;