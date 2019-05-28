import React, {Component} from "react"; //react library 
import {render} from "react-dom";//Module import/export 
//default (import/export)
//normal (import/export)

//First react application

//The very first component or root component
class RootApp extends React.Component{ //virtual dom
    //The way we do in java class we will do here
    constructor(props){
        super();
        this.myName = "Jerry";
        this.myClass = "mycssClass";
    }    

    render(){ //JSX Code (Javascript as xml structure)
        return(
            <div>
                <h1 className={this.myClass}>{this.myName}</h1>
                <br/>
                {"This is the first ever react component i am writing"}
                <br/>
                <h2>{"Bikram"}</h2>
                <h3>{"Oksana"}</h3>
                <p>{"Prasanna"}</p>
                
                <p>{5+50}</p>

                <h3>{"Navdeep"}</h3>
                <h3>{"Saranya"}</h3>
                <h3>{"Andrew"}</h3>
            </div>
        )
    }
}

render(<RootApp/>, document.getElementById("root"));//hooking up react application (virtual dom) to root element