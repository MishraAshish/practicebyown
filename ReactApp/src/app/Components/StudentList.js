import React from "react";
import {StudentComponent as ChildComponent} from "./StudentComponent";
//stateful component
export default class StudentList extends React.Component { //ParentComponent
    constructor(props){
        super();
        this.state ={//private object property of a component it can be mutated
            myName : "Master Jerry",
            myClass : "mycssClass",
            studentList : []
       }     
       for (let index = 1; index <= 5; index++) {
           this.state.studentList.push({
               id: index + (index-1),
               name:"Student"+index
           })
       }
    }

    render(){//JSX: 
        return(
            <div>
                {
                    this.state.studentList.map((student, index) => (
                        <ChildComponent myid={student.id} name={student.name} 
                        cssClass={index > 2 ? "mycssClass2": this.state.myClass}/>
                    ))
                }
            </div>
        )
    }
}

