import {connect} from "react-redux";
import CartList from "../components/CartListComponent";

const mapStateToProps = (state) => {
    return {
         items: state.items
    }
} 

export default connect(mapStateToProps,null)(CartList);