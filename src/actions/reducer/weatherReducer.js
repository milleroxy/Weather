import { ERROR, REQUEST, SUCCESS } from "../weatherAction.js";

const initialState = {
        country: 'country',
        city: 'city',
        temp: 0,
        pressure: 0,
        sunset: new Date(),
        message:'Enter correct city name',
};


export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                message: 'Loading...',
            };
        case SUCCESS:
            return {
                ...state,
                country: action.payload.country,
                city: action.payload.city,
                temp: action.payload.temp,
                pressure: action.payload.pressure,
                sunset: action.payload.sunset,
                message: '',
            };
        case ERROR:
            return {
                ...state,
                message: 'This city is not founded',
            };
        default:
            return state;
    }
};