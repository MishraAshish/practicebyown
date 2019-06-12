import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";

import cart from "./app/CartApp/State/CartReducer";
//import acctreducer from "./Reducers/AccountReducer";

const myLogger = () => (next) => (action) => {    
    console.log("Logged Action", action);
    next(action);
};

export default createStore(
    combineReducers({
        items:cart
        //,acctreducer
    }),
    {},
    applyMiddleware(myLogger,promise)
)