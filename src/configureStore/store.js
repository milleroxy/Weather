import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer.js";
import {loggerEnhancer} from "../enhancers/loggerEnhancer.js";
import {thunkEnhancer} from "../enhancers/thunkEnhancer.js";

export const store = createStore(weatherReducer, applyMiddleware(thunkEnhancer ,loggerEnhancer));