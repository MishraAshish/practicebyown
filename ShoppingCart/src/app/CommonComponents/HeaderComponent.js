import React from "react";
import {NavLink} from "react-router-dom";

export default function Header(props){
    return (
        <div>
            <h2>{props.appTitle}</h2>
            <NavLink to="/" exact className="button" activeClassName="success" >Home </NavLink>
            <NavLink to="/cart" className="button" activeClassName="success" >Cart  </NavLink>
            <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
            <NavLink to="/products" className="button" activeClassName="success">Product  </NavLink>
            <NavLink to="/checkout" className="button" activeClassName="success">CheckOut  </NavLink>
            <hr/>
        </div>
    )
}