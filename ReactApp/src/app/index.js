import React, {Component} from "react"; //react library
import {render} from "react-dom";//Module import/export
import StudentList from "./Components/StudentList";
import PersonList from "./Components/PersonList";
import Header from "./Components/HeaderComponent";
//default (import/export)//normal (import/export)//First react application
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
        <Router>
           <div>
               {"This is a parent Component"}
               <Header/>
               
                    <Switch>
                        <Route path="/Student" exact component={StudentList}/>
                        <Route path="/Person" component={PersonList}/>
                        <Route path="*" component={StudentList}/>
                    </Switch>
                
           </div>
        </Router>
       )
   }
}

render(<RootApp/>, document.getElementById("root"));