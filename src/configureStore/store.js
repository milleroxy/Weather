import {legacy_createStore as createStore} from "redux";
import {rootReducer} from "../reducers/rootReducer.js";



export const store = createStore(rootReducer);

