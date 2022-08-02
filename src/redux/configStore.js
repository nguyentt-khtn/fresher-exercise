import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { ModalReducer } from "./reducers/ModalReducer";
import { UserLoginReducer } from "./reducers/UserLoginReducer";


const rootReducer = combineReducers({
    UserLoginReducer,
    ModalReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))