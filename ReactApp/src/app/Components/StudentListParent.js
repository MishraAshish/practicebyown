import React from "react";
import {StudentComponent as ChildComponent} from "./StudentComponentChild";
//stateful component
export default class StudentList extends React.Component { //ParentComponent
    constructor(props){
        super();
        this.state ={//private object property of a component it can be mutated
            myName : "Master Jerry",
            myClass : "mycssClass",
            studentList : [],
            changedNameFromChild: "Bikram"
       }     
       for (let index = 1; index <= 1; index++) {
           this.state.studentList.push({
               id: index + (index-1),
               name:"Student"+index
           })
       }
    }    

    callBackMethodToGetData = (dataFromChild) =>{        
        //alert("This is the data from child : " + dataFromChild);
        console.log("Change value from child ", dataFromChild);

        //this.state.changedNameFromChild = dataFromChild; //initial time developers

        //this is a call back to update your state so that it gets re-rendered,
        //it updates in a batch so that to avoid duplicate re-rendering
        this.setState({
            changedNameFromChild:dataFromChild
        });

        console.log("Changed state value ", this.state.changedNameFromChild);
    }

    render(){//JSX: 

        console.log("Parent Rendering Component!");
        return(
            <div>
                {
                    this.state.studentList.map((student, index) => (
                        <ChildComponent myid={student.id}  
                        cssClass={index > 2 ? "mycssClass2": this.state.myClass}
                        returnToChild={this.callBackMethodToGetData}
                        />
                    ))
                }
                <div>
                    <b>{"This is the name which will change : "+this.state.changedNameFromChild}</b>
                </div>
            </div>
        )
    }
}

