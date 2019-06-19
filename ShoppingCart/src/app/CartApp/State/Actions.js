import * as ActionTypes from "./ActionTypes";

export const addItem = (item) =>   ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        item
    }
})

export const addUserAddress = (address) => ({    
    type: ActionTypes.ADDUSER_ADDRESS,
    payload: {
        address
    }
})

export const empty = () => ({
    type: ActionTypes.EMPTY_CART
})

export const removeItem = (id) => ({
    type: ActionTypes.REMOVE_ITEM,
    payload: {
        id
    }
})

export const updateItem = (id, qty) => ({
    type: ActionTypes.UPDATE_ITEM,
    payload: {
        id,
        qty: parseInt(qty)
    }
})

export const INIT_PRODUCTS = (products) => ({
    type: "INIT_PRODUCTS",
    payload: {
        products
    }
});

export const loading = (loading) => ({
    type: "LOADING",
    payload: {
        loading
    }
});


export const fetchProducts = () => {
    console.log('entering fetch products');

    // thunk, returns function as an action
    return function(dispatch, getState) {
        // here we go with ajax call
        // thunk shall call
        console.log("called by thunk");
        dispatch(loading(true));

        window.fetch("http://localhost:9090/api/products")
        .then (response => response.json())
        .then (products => {
            console.log("Got products ", products);
            let action = INIT_PRODUCTS(products);
            dispatch(action);
            dispatch(loading(false));
        })
    }
}