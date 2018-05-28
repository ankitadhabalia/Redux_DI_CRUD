import { combineReducers } from "redux";
import customerReducer from "./customerReducer";
import authReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: authReducer,
    customerR :  customerReducer
});

export default rootReducer;