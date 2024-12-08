import {useState} from "react";

const Form = ({getWeather}) => {
    const [city, setCity] = useState('') // state доступен везде - переменная состояния и функция меняющая ее состояние

    const getCity =(e) => {
        e.preventDefault();
        getWeather(city);
        setCity('') //очистили строку
    }

    // const handleChangeCity = (e) => {  // обработчик: при смене города
    //     setCity(e.target.value.trim());
    // }
    return (
        <form onSubmit={getCity}>
           <input onChange={e => setCity(e.target.value.trim())} type="text" value={city.toUpperCase()}/>
            <button type="submit">Get weather</button>
        </form>
    );
};

export default Form;