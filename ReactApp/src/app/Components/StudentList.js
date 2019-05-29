import React from "react";

export default class StudentList extends React.Component {
    constructor(props){
        super();
        this.studentList = [];
        this.myClass = "mycssClass";
        for (let index = 1; index <= 5; index++) {            
            this.studentList.push({
                rollCall: index + (index-1),
                name:"Student "+index,
                key:index
            })
        }
    }

    render(){//JSX: 
        return(
            <div>
                {
                    this.studentList.map((student, index) => (
                        <a href="/google.co.in" className={"row col-md-6 pull-right "+ (student.rollCall >= 5 ? 
                            "mycssClass2 " : this.myClass) +" "+index}>{student.rollCall} : Hello, {student.name}!</a>
                    ))
                }
            </div>
        )
    }
}

export class StudentList2 extends React.Component {
    constructor(props){
        super();
        this.studentList = [];
        this.myClass = "mycssClass";
        for (let index = 100; index <= 105; index++) {            
            this.studentList.push({
                rollCall: index + (index-1),
                name:"Student "+index,
                key:index
            })
        }
    }

    render(){
        return(
            <div>
                {
                this.studentList.map((student, index) => (
                    <a href="/google.co.in" className={"row col-md-6 pull-right "+ (student.rollCall >= 5 ? 
                        "mycssClass2 " : this.myClass) +" "+index}>{student.rollCall} : Hello, {student.name}!</a>
                ))
                }
            </div>
        )
    }
}