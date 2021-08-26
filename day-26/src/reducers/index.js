import counterReducer from "./counterReducer";
import counterReducer2 from "./counterReducer2";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    counter:counterReducer,
    counter2:counterReducer2,
});
export default rootReducer;