import React from "react";
import {NavLink} from "react-router-dom";
import "../../App.css";
export default function Header(props){
    return (
        <div>
            <h2>{props.appTitle}</h2>
            <div className="row parentclass">
                <div className="verticalHeader col-md-1">
                    <NavLink to="/" exact className="" activeClassName="success" >Home </NavLink>
                    <NavLink to="/cart" className="" activeClassName="success" >Cart  </NavLink>
                    <NavLink to="/products" className="" activeClassName="success">Product  </NavLink>
                    <NavLink to="/checkout" className="" activeClassName="success">CheckOut  </NavLink>            
                    <NavLink to="/address" className="" activeClassName="success">Address  </NavLink>
                    <NavLink to="/about" className="" activeClassName="success">About  </NavLink>
                </div>
                {/* <div className="othersections col-md-1">
                    
                </div>
                <div className="othersections col-md-1">
                    
                </div>
                <div className="othersections col-md-1">
                    
                </div>
                <div className="othersections col-md-1">
                    
                </div>
                <div className="othersections col-md-1">
                    
                </div>
                <div className="othersections col-md-1">
                    
                </div>
                <div className="othersections col-md-1">
                    
                </div>
                <div className="othersections col-md-1">
                    
                </div>
                <div className="othersections col-md-1">
                    
                </div> */}
            </div>
            {/* <hr/> */}
        </div>
    )
}