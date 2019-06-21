import React from "react";
import PropTypes from "prop-types";

export default function Footer(props){
    let {appTitle, year} = props;
    return (
        <div className="footerbox">
            <hr/>
            <p><b>Copyright@ {year}, {appTitle}</b></p>
            <i>{props.children}</i>
        </div>
    )
}
Footer.propTypes = {
    appTitle: PropTypes.string,
    year: PropTypes.number.isRequired   
}
Footer.defaultProps ={
    appTitle: "Learning React App",
    year: 2019
}