import React from 'react';
import CartItem from "../container/CartItemContainer";

export default class Checkout extends React.Component {
    constructor(props){
        super(props);        
    }  

    render() {               
        let addressPbj = this.props.address.address;
        console.log("this.props.address", addressPbj);
        return (
            <div>
                <div className="form col-md-8">
                    <p><b>First Name : </b>{addressPbj.firstName}</p> 
                    <hr/>
                    <p><b>Last Name : </b>{addressPbj.lastName}</p> 
                    <hr/>
                    <p><b>Street : </b>{addressPbj.street}</p> 
                    <hr/>
                    <p><b>Cell Phone : </b>{addressPbj.cellPhone}</p> 
                    <hr/>

                    <b>Product Details</b>
                    <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>                        
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.products.map (item => (
                        <CartItem item={item}
                                    key={item.id}
                                    donotrender={true}
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