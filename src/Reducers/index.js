import {combineReducers} from "redux";
import SearchReducer from './search.js'

export default combineReducers({
    movies:SearchReducer, 
})