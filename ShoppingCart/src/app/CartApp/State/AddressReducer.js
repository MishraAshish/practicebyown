import * as ActionTypes from "./ActionTypes";

const INITIAL_STATE = {
    address: {
        firstName: "",
        lastName: "",
        street: "",
        cellPhone: ""
    }
}


export default function addressReducer(state=INITIAL_STATE, action) {
    console.log("productReducer", state, action);
    
    switch(action.type) {
        case ActionTypes.ADDUSER_ADDRESS: 
            console.log("Payload Address", action.payload.address)
            return {...state, address: action.payload.address}        

        default:
            return state
    }
}