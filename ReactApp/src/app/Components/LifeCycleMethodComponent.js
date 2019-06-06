import React from "react";

//life cycle method one way bind and implementing two way binding
export default class LifeCycleMethods extends React.PureComponent{
    constructor(props){
        super(props);
        //initialize state
        this.state = {
            counter:1,
            counter2:5,
            incrementedValue:0,
            name:"Jerry"
        }
        this.textInput = React.createRef();
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
    // shouldComponentUpdate(nextProps, nextState){ //The most important LCM
    //     console.log("should Component Update - Ready To Update Through State", nextProps ,nextState);
        
    //     if (nextState.counter > 10 && nextState.counter < 50) {
    //         return false;
    //     }
    //     return true;
    // }
    componentWillUpdate(nextProps, nextState){
        console.log("Component Will Update - New Values", nextProps ,nextState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Component Did Update - Old Values", prevProps ,prevState);
    }
    componentDidCatch(error, info) { // Display fallback UI 	
        console.log("Error", error);
        this.setState({ hasError: true }); 
        // You can also log the 	error to an error reporting service 	
        //logErrorToMyService(error, info);
    }
    counterOnChange = (event)=>{
        console.log("Change has been called", event.target.value);
        event.target.value = event.target.value;

        //this.state.counter = evt.target.value;
        //this.forceUpdate();

        this.setState({
            counter:event.target.value
        })
    }
    counter2OnChange = (event)=>{        
        this.setState({
            counter2: event.target.value
        });
    }
    incrementFunction = (val, name) => {
        //debugger;
        this.setState({
            incrementedValue:parseInt(this.state.counter)+ parseInt(val),
            name:name
        });
    }
    onRefChange = ()=>{
        console.log(this.textInput.current.value);
        this.textInput.current.focus();
        this.textInput.current.value = "Ashish";
        
        this.forceUpdate();
    }
    
    render(){
        console.log("We are in render method - View is Rendering");
        const pStyle = {
            fontSize: '15px',
            textAlign: 'center'
          };
        return(
            <div className={"row col-md-10"}>
                <input type="text" className={"form-control"} value={this.state.counter} onChange={this.counterOnChange}/>
                {"Counter Square "}<b>{!isNaN(this.state.counter) ? parseInt(this.state.counter)*parseInt(this.state.counter):0}</b>
                <hr/>
                <div className={"col-md-10"}>
                    <input type="text" className={"form-control button-border"} style={pStyle} value={this.state.counter2} onChange={this.counter2OnChange}/>
                    <hr/>
                    <button className={"btn btn-default"} onClick={() => this.incrementFunction(this.state.counter2, "Prassanna")}>{"Incrementer"}</button>
                    <hr/>
                    {"Counter Increment : "}<b>{this.state.incrementedValue}</b>
                    <hr/>
                    <br/>
                    {"Updated Name : "}<b>{this.state.name}</b>
                </div>
                <div className={"row col-md-10"}>
                    <input type="text" ref={this.textInput} value={"Ref Keyword"}/>
                    <input type="button" value="Focus the text input" onClick={this.onRefChange} />
                </div>
            </div>
        )        
    }
}