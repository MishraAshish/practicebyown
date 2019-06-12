import * as ActionTypes from "./ActionTypes";

export const addItem = (item) =>   ({
    type: ActionTypes.ADD_ITEM,
    payload: {
        item
    }
})

export const empty = () => ({
    type: ActionTypes.EMPTY_CART
})