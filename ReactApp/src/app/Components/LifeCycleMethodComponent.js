import React from "react";

//life cycle method one way bind and implementing two way binding
export default class LifeCycleMethods extends React.Component{
    constructor(props){
        super(props);
        //initialize state
        this.state = {
            counter:1
        }
    }

    componentWillMount(){
        console.log("Component Will Mount - View Not Ready");
    }

    componentDidMount(){
        console.log("Component Did Mount - View is Ready");
    }

    componentWillUnmount(){
        console.log("Component Will UnMount - View is destroyed");
    }

    //Update lifecycle methods
    componentWillReceiveProps(nextProps){
        console.log("Component Will ReceiveProps - Ready To Update Through Props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){ //The most important LCM
        console.log("should Component Update - Ready To Update Through State", nextProps ,nextState);
        
        if (nextState.counter > 10 && nextState.counter < 50) {
            return false;
        }        
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component Will Update - New Values", nextProps ,nextState);
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component Did Update - Old Values", prevProps ,prevState);
    }

    componentDidCatch(error, info) { // Display fallback UI 	
        this.setState({ hasError: true }); 
        // You can also log the 	error to an error reporting service 	logErrorToMyService(error, info); }
    }

    counterOnChange = (event)=>{
        console.log("Change has been called", event.target.value);
        //event.target.value = event.target.value;
        //this.state.counter = evt.target.value;
        //this.forceUpdate();

        this.setState({
            counter:evt.target.value
        })
    }

    render(){
        console.log("We are in render method - View is Rendering");
        return(
            <div className={"row"}>
                <input type="text" className={"form-control"} value={this.state.counter} onChange={this.counterOnChange}/>
                {"Counter Square "}<b>{!isNaN(this.state.counter) ? parseInt(this.state.counter)*parseInt(this.state.counter):0}</b>
            </div>
        )        
    }
}