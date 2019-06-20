import {connect} from 'react-redux';
import Address from '../Components/AddressComponent';//F12
import {addUserAddress} from '../state/actions';

let mapStateToProps = (state) => {
    console.log("Redux cart map state to props", state)
    return {
        address: state.address
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addUserAddress:(address) => {
            dispatch(addUserAddress(address));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Address);