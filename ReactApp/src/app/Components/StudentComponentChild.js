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

    //Update lifecycle methods
    componentWillReceiveProps(nextProps){
        console.log("Component Will ReceiveProps - Ready To Update Through Props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){ //The most important LCM
        console.log("should Component Update - Ready To Update Through State", nextProps ,nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component Will Update - New Values", nextProps ,nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component Did Update - Old Values", prevProps ,prevState);
    }

    render(){
        console.log("In Child Render Method ", this.state.name == "MyNewName" ? "Re-Rendered":"Rendered");
        return(
            <div className={"borderClass"}>
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