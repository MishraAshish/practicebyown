import React from "react";
import CartItem from "../container/CartItemContainer";

export default function CartList(props) { 
    let {items} = props;
    console.log("CartList function render")
   return (
       <div> 
       <h2>Cart List</h2>
       <table>
           <thead>
               <tr>
                   <th>Name</th>
                   <th>Price</th>
                   <th>Qty</th>
                   <th>Total</th>
                   <th>Remove</th>
               </tr>
           </thead>
           <tbody>
           {
               items.map (item => (
                   <CartItem item={item}
                             key={item.id}
                   />
               ))
           }
           </tbody>
       </table>
       </div>
    )
}