import React, {Component} from "react"; //react library
import {render} from "react-dom";//Module import/export
import StudentList from "./Components/StudentListParent";
import PersonList from "./Components/PersonList";
import Header, {Footer} from "./Components/HeaderComponent";
import DefaultComponent from "./Components/DefaultComponent";
import LifeCycleMethods from "./Components/LifeCycleMethodComponent";
//default (import/export)//normal (import/export)//First react application
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";

//Jquery id class
//--history-api-fallback
//The very first component or root component
class HomeComponent extends Component{ //virtual dom //stateful component
   //The way we do in java class we will do here
   constructor(props){
       super();       
   }

   render(){ //JSX Code (Javascript as xml structure) //diff
       return(
        <Router>
           <div>
               <h1>{"Home Page"}</h1>
               <Header name={"Saranya"}>
                   <h2 className={"Row"}>{"This is the first header"}</h2>
                   <p>{"This is header a very basic header"}</p>
               </Header>               
                <Switch>
                    <Route path="/Student" exact component={StudentList}/>
                    <Route path="/Person" component={PersonList}/>
                    <Route path="/lifecycle" component={LifeCycleMethods}/>
                    <Route path="*" component={DefaultComponent}/>
                </Switch>
                <Footer>
                    <h2>{"Test"}</h2>                    
                   <h2 className={"Row"}>{"This is footer a very basic footer"}</h2>
               </Footer>
           </div>
        </Router>
       )
   }
}

render(<HomeComponent/>, document.getElementById("root"));