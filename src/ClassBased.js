import React,{Component} from "react";
import "./style.css"

export class ClassBased extends Component{
    render() {
        return (
            <div className="main__div__class">
                <h1>
                    This is created using a class component
                </h1>
                <p className="ext__css">
                    This is done using external css
                </p>
                <p style={{color:"gold"}}>
                    This is done using inline css
                </p>
            </div>
        )
    }
}

export default ClassBased;