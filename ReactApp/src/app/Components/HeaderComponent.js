//create a header component
import {NavLink} from "react-router-dom";
import React from "react";
//functional or stateless components
const Header = (props) => {
    var props = props;    
    return(
        <div>
            {"Header Component"}
            <NavLink to="/Student" activeStyle={{color:"red"}} title={"USer File"}> {"Student"} </NavLink>
            <NavLink to="/Person" activeClassName="red">{"Person"} </NavLink>
        </div>
    )
}
export default Header;