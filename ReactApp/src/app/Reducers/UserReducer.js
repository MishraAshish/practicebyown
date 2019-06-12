//initial state of user and attach to the action and update the state after executing UserAction

const initialState = { 
    name:"Oksana", 
    age:21
}

const userReducer = (state = initialState, action ) =>{
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,//checks all the states
                name: action.payload //update the name only and keep age as it is 
            };
            break;
        case "SET_NAME_FULFILLED":
            state = {
                ...state,//checks all the states
                name: action.payload //update the name only and keep age as it is 
            };
            break;    
        case "SET_AGE":
            state = {
                ...state,
                age:action.payload
            }
            break;
        default:
            break;
    }
    return state;
}

export default userReducer;