import React from "react";
import {setAge, setName} from "../Actions/UserAction";
import {connect} from "react-redux";


class ReduxComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            //update in same component
        }
    }

    render(){
        return(
            <div className={"form"}>
                    <b>{"A simple react-redux Component"}</b>
                    <div className={"col-md-10"}>
                        <div>{"Name Is :"}<b>{this.props.user.name}</b>
                            <hr/>
                            <button className={"btn btn-default"} onClick={() => {this.props.set_Name("Ashish")}} >{"Set Name"}</button>
                        </div>

                        <div>{"Age Is :"}<b>{this.props.user.age}</b>
                            <hr/>
                            <button className={"btn btn-default"} onClick={() => {this.props.set_Age(25)}} >{"Set Age"}</button>
                        </div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        set_Name : (name) =>{
            dispatch(setName(name))
        },
        set_Age : (age) =>{
            dispatch(setAge(age))
        }
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);