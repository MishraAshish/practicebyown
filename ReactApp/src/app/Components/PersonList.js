import React from "react";
import {connect} from "react-redux";
//stateful component
class PersonList extends React.Component {
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
                <div>{"Name Is :"}<b>{this.props.user.name}</b></div>
                {
                this.studentList.map((student, index) => (
                    <a href="/google.co.in" className={"row col-md-6 pull-right "+ (student.rollCall >= 102 ? 
                        "mycssClass2 " : this.myClass) +" "+index}>{student.rollCall} : Hello, {student.name}!</a>
                ))
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {}    
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);