import {createStore, combineReducers, applyMiddleware} from "redux";
import promise from "redux-promise-middleware";
import thunk from 'redux-thunk';

import cart from "./app/CartApp/State/CartReducer";
import productReducer from "./app/CartApp/State/ProductReducer";
import address from "./app/CartApp/State/AddressReducer";

const myLogger = () => (next) => (action) => {    
    console.log("Logged Action", action);
    next(action);
};

export default createStore(
    combineReducers({
        items:cart,
        product:productReducer,
        address
    }),
    {},
    applyMiddleware(myLogger,promise,thunk)
)