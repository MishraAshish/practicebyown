import {NavLink} from "react-router-dom";
import React from "react";
//functional or stateless components //dumb component or stateless component
const Header = (props) => {
    var props = props; //immutable    
    return(
        <div>
            <h4>{props.name}</h4>
            {props.children[0]}
            {props.children[1]}
            <NavLink to="/Student" activeStyle={{color:"red"}} title={"USer File"}> {"StudentTest"} </NavLink>
            <NavLink to="/Person" activeClassName="red">{"Person"} </NavLink>
        </div>
    )
}
export default Header;

export const Footer = (props) => {    
    var props = props; //immutable    
    return(
        <div>      
            {props.children[0]}
            {props.children[1]}            
        </div>
    )
}