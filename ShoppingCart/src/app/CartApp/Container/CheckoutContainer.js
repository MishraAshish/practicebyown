import {connect} from 'react-redux';
import Checkout from '../Components/CheckoutComponent';//F12

let mapStateToProps = (state) => {
    console.log("Redux cart map state to props", state)
    return {
        address: state.address,
        products: state.items
    }
}


export default connect(mapStateToProps, null)(Checkout);