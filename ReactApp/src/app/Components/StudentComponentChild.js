import React from "react";
//stateful component
export class StudentComponent extends React.Component {
    constructor(props){
        super(props);//syncing the props across all components
        this.state ={
            myid:props.myid,
            name:props.name,
            cssClass:props.cssClass
        }
    }

    changeMyName = (newName) => {
        console.log("new Name", newName);          
        //this.state.name = newName;
        //console.log("new Name", this.state.name);
        this.setState({
            name: newName
        })
    }

    render(){
        console.log("In Render Method ", this.state.name == "MyNewName" ? "Re-Rendered":"Rendered");
        return(
            <div>
                {"Hi! this is "}
                <a href={"wwww.google.com"} className={this.state.cssClass}>{this.state.name}</a> 
                {"and my identity number is : "} <b>{this.state.myid}</b>

                <div className={"row"}>
                    <input type="button" onClick={() => this.changeMyName("MyNewName")} value={"Change My Name"}/>
                </div>

                <div className={"row"}>
                    <input type="button" onClick={() => this.props.returnToChild(this.state.name)} value={"Send My Name Back"}/>
                </div>
            </div>
        )
    }
}