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
            changedNameFromChild: "NoChangeName"
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
        //this.state.changedNameFromChild = dataFromChild;
        this.setState({
            changedNameFromChild:dataFromChild
        });

        console.log("Changed state value ", this.state.changedNameFromChild);
    }

    render(){//JSX: 
        return(
            <div>
                {
                    this.state.studentList.map((student, index) => (
                        <ChildComponent myid={student.id} name={student.name} 
                        cssClass={index > 2 ? "mycssClass2": this.state.myClass}
                        returnToChild={this.callBackMethodToGetData}
                        />
                    ))
                }
                <div>
                    <b>{"This is the name which will change "+this.state.changedNameFromChild}</b>
                </div>
            </div>
        )
    }
}

