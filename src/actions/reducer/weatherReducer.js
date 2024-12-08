import { ERROR, REQUEST, SUCCESS } from "../weatherAction.js";

const initialState = {
    city: '',
    weatherInfo: null,
    message: 'Enter city name',
};


export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                city: action.payload.city,
                loading: true,
            };
        case SUCCESS:
            return {
                ...state,
                weatherInfo: action.payload.weatherInfo,
                message: action.payload.message
            };
        case ERROR:
            return {
                ...state,
                message: action.payload.message,
            };
        default:
            return state;
    }
};