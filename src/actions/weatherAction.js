export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const request = () => ({
    type: REQUEST,
})

export const success = (weatherInfo) => ({
        type: SUCCESS,
        payload: weatherInfo
    })

 export const error = () => ({
         type: ERROR,
     })
