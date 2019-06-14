import React from 'react';

export default class ProductInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showInfo:false
        }
    }
    showDetailedInfo = ()=>{        
        console.log("Show info");
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        let product = this.props.item || [];

        return (
            <div>
                <li key={product.id} onClick={()=>{this.showDetailedInfo()}}> {product.name}</li>
                {this.state.showInfo ? <ul>
                    <li>{product.camera}</li>
                    <li>{product.cpu}</li>
                    <li>{product.display}</li>
                    <li>{product.storage}</li>
                </ul> : ""}
            </div>
        )
    }
}