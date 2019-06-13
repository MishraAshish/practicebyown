import React, {Component} from "react";

export default class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qty: props.item.qty
        }
    }
 
    componentWillReceiveProps(nextProps) {
        this.setState({
            qty: nextProps.item.qty
        });
    }

    componentWillUnmount() {
        console.log("CartItem will unmount");
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     if (nextProps.item.qty > 5) {
    //         return false;    
    //     }
    //     return true;
    // }

    //es next
    onChangeText = (e) => {
        // target is input element, real dom element
        let target = e.target;
        this.setState({
            qty: target.value
        })
    }

    componentDidMount() {
        this.inputElem.focus();
     }
     
    render() {
        console.log("CartItem render", this.props.item.id);         
        let {item} = this.props;
        return (
            <tr>
                <td>{item.name}</td>
                <td>{item.price}
                   <p ref="discount"> </p>
                </td>
                <td>
                   <input value={this.state.qty} 
                          type="number"
                          onChange={this.onChangeText}
                          ref = {(elem) => this.inputElem = elem}
                   />   
                </td>
                <td> {item.price * item.qty} </td>
                <td>
                    <button onClick={() => this.props.actions.updateItem(item.id, this.state.qty)}>
                        Update
                    </button>
                    <button onClick={() => this.props.actions.removeItem(item.id)}>
                        Remove
                    </button>
                </td>
            </tr>
        )
    }
} 