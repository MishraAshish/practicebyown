import React from "react";
//stateful component
export class StudentComponent extends React.Component {
    constructor(props){
        super();
        this.state ={
            myid:props.myid,
            name:props.name,
            cssClass:props.cssClass
        }
    }

    render(){
        return(
            <div>
                {"Hi! this is "}
                <a href={"wwww.google.com"} className={this.state.cssClass}>{this.state.name}</a> 
                {"and my identity number is : "} <b>{this.state.myid}</b>
            </div>
        )
    }
}