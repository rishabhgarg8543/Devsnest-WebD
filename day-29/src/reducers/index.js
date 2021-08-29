import{combineReducers}from "redux"
import placeDataReducers from "./placeDataReducer"
import placeReducer from "./placeReducer";
import themeReducer from "./themeReducer";
const rootReducers=combineReducers({
    place:placeReducer,
    placedata:placeDataReducers,
    theme:themeReducer,
}); 
export default rootReducers;