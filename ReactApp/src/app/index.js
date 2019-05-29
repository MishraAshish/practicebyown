import React, {Component} from "react"; //react library
import {render} from "react-dom";//Module import/export
import StudentList, {StudentList2 as Person} from "./Components/StudentList";
//default (import/export)//normal (import/export)//First react application

//Jquery id class

//The very first component or root component
class RootApp extends Component{ //virtual dom
   //The way we do in java class we will do here
   constructor(props){
       super();
       this.myName = "Master Jerry";
       this.myClass = "mycssClass";

       this.studentList = [];

       for (let index = 1; index <= 5; index++) {
           this.studentList.push({
               rollCall: index + (index-1),
               name:"Student"+index
           })
       }
   }

   render(){ //JSX Code (Javascript as xml structure) //diff
       return(
           <div>
               {"This is a parent Component"}
               
               <StudentList/>

               {"This is a normal student Component not the default"}
               <Person/>
           </div>
       )
   }
}

render(<RootApp/>, document.getElementById("root"));