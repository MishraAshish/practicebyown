import {connect} from 'react-redux';
import ProductList from '../Components/ProductComponent';
import * as actions from '../state/actions';


function mapStateToProps(state) {
    return {
        products: state.product.products, //combine reducer
        loading: state.product.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: function() {
            const actionFn = actions.fetchProducts();
            dispatch(actionFn)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);