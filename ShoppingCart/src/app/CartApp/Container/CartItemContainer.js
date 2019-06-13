import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import CartItem from "../components/CartItemComponent";
import * as actions from "../state/Actions";

 
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(null,mapDispatchToProps)(CartItem);