import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { UserLoginReducer } from "./reducers/UserLoginReducer";


const rootReducer = combineReducers({
    UserLoginReducer,
    
})

export const store = createStore(rootReducer, applyMiddleware(thunk))