import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";

import user from "./Reducers/UserReducer";
//import acctreducer from "./Reducers/AccountReducer";

const myLogger = () => (next) => (action) => {    
    console.log("Logged Action", action);
    next(action);
};

export default createStore(
    combineReducers({
        user
        //,acctreducer
    }),
    {},
    applyMiddleware(myLogger,promise)
)