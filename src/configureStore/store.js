import {weatherReducer} from "../actions/reducer/weatherReducer.js";
import {combineReducers, legacy_createStore as createStore} from "redux";

    export const rootReducer = combineReducers({weather: weatherReducer});

export const store = createStore(rootReducer);

