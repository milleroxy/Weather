export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const request = () => ({type: 'REQUEST'});

export const success = (weather) => ({
    type: 'SUCCESS',
    payload: weather,
});

export const error = () => ({type: 'ERROR'});