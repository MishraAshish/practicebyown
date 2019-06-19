import React from 'react';

export default class Address extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: props.address.firstName,
            lastName: props.address.lastName,
            street: props.address.street,
            cellPhone: props.address.cellPhone
        }
    }

    AddUserAddress = ()=>{
        let address = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            street: this.state.street,
            cellPhone: this.state.cellPhone
        }
        console.log("address", address)
        this.props.addUserAddress(address);    
    }

    onChangeText = (e) => {
        // target is input element, real dom element
        let target = e.target;
        let classlist = target.classList.toString();
        if(classlist.indexOf("fname")>=0){
            this.setState({
                firstName: target.value
            })
        }else if(classlist.indexOf("lname")>=0){
            this.setState({
                lastName: target.value
            })
        }else if(classlist.indexOf("street")>=0){
            this.setState({
                street: target.value
            })
        }else{
            this.setState({
                cellPhone: target.value
            })
        }
    }

    render() {       

        return (
            <div>
                <div className="form col-md-8">
                    <input type="text" className="form-control col-md-6 fname" value={this.state.firstName} 
                          placeholder="First Name"
                          onChange={this.onChangeText} />
                    <hr/>
                    <input type="text" className="form-control col-md-6 lname" value={this.state.lasttName} 
                          placeholder="Last Name"
                          onChange={this.onChangeText} />
                    <hr/>
                    <input type="text" className="form-control col-md-6 street" value={this.state.street} 
                          placeholder="Street Name"
                          onChange={this.onChangeText} />
                    <hr/>
                    <input type="text" className="form-control col-md-6 cellphone" value={this.state.cellPhone} 
                          placeholder="Cell Phone"
                          onChange={this.onChangeText} />
                    <hr/>
                    <input type="button" className={"btn btn-default"} value={"Add User"} onClick={this.AddUserAddress}/>
                </div>
            </div>
        )
    }
}