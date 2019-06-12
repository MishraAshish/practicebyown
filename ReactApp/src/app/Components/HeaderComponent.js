import {NavLink} from "react-router-dom";
import React from "react";
//functional or stateless components //dumb component or stateless component
const Header = (props) => {
    var props = props; //immutable    
    return(
        <div>            
            <NavLink to="/Student" className="button" activeClassName="success" title={"USer File"}> {"StudentTest"} </NavLink> |
            <NavLink to="/Person" className="button" activeClassName="success">{"Person"} </NavLink> |
            <NavLink to="/lifecycle" className="button" activeClassName="success">{"Lifecycle"} </NavLink> |
            <NavLink to="/reduxcomp" className="button" activeClassName="success">{"React Redux"} </NavLink> |
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