import {weatherReducer} from "../actions/reducer/weatherReducer.js";
import {legacy_createStore as createStore} from "redux";

export const store = createStore(weatherReducer);

