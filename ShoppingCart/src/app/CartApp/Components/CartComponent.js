import React from "react";

export default function Cart(props) {
    console.log("Cart Component render ", props);
    return (
        <div>
            <h2>Redux Cart</h2>
            <p>Cart Length {props.cartLength}</p>
            
            <button onClick={props.addItem} >
                Add Item
            </button>

            <button onClick={props.empty} >
                Empty
            </button>

            {/* <CartList />
            <CartSummary /> */}
        </div>
    )
}