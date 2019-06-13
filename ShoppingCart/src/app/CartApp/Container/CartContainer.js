
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Cart from '../Components/CartComponent';//F12
import {addItem, empty} from '../state/actions';

let mapStateToProps = (state) => {
    console.log("Redux cart map state to props", state)
    return {
        cartLength: state.items.length
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addItem: function() {
            let id = Math.ceil(Math.random() * 10000);
            let item = {
                id,
                name: `Product ${id} Name`,
                price: Math.ceil(Math.random() * 100),
                qty: 1
            }
            const action = addItem(item);
            dispatch(action);
        },
        empty: bindActionCreators(empty, dispatch)
        // empty: () =>{
        //     dispatch(empty)
        // }
    }
}

// decorator
const connectFn = connect(mapStateToProps, mapDispatchToProps);

const CartContainerComponent = connectFn(Cart)

export default CartContainerComponent;