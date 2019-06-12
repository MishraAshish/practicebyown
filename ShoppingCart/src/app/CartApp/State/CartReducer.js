import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = []

export default function CartReducer(state = INITIAL_STATE, action) {
    console.log("cart Reducer", state, action);
    switch(action.type) {
        case ActionTypes.ADD_ITEM: 
            return [...state, action.payload.item]        

        case ActionTypes.EMPTY_CART:
            return []

        default:
            return state;
    }
}