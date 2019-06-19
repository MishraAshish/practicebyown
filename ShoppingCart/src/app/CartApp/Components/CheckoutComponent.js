import React from 'react';
import CartItem from "../container/CartItemContainer";

export default class Checkout extends React.Component {
    constructor(props){
        super(props);        
    }  

    render() {       
        
        return (
            <div>
                <div className="form col-md-8">
                    <b>First Name : </b><p>{this.props.address.firstName}</p> 
                    <hr/>
                    <b>Last Name : </b><p>{this.props.address.lastName}</p> 
                    <hr/>
                    <b>Street : </b><p>{this.props.address.street}</p> 
                    <hr/>
                    <b>Cell Phone : </b><p>{this.props.address.cellPhone}</p> 
                    <hr/>

                    <b>Product Details</b>
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
                    this.props.products.map (item => (
                        <CartItem item={item}
                                    key={item.id}
                        />
                    ))
                }
           </tbody>
       </table>
                </div>
            </div>
        )
    }
}