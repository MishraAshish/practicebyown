import React from 'react';
import ProductInfo from "./ProductInfoComponent";

export default class ProductList extends React.Component {

    componentDidMount() {
            this.props.fetchProducts();
    }

    render() {
        let products = this.props.products || [];

        return (
            <div className="componentBody row">
                <h2>Product List {this.props.loading ? "Loading " : " Loaded "}</h2>
                <ul>
                {
                    products.map (product => (
                        // <li key={product.id}> {product.name}</li>
                        <ProductInfo item={product}/>
                    ))
                }
                </ul>
            </div>
        )
    }
}