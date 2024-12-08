export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const request = (city) => ({
    type: REQUEST,
    payload: {city}
})

export const success = (weatherInfo) => ({
        type: SUCCESS,
        payload: {weatherInfo}
    })

 export const error = (message) => ({
         type: ERROR,
         payload: {message}
     })
