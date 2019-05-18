import React from "react";
import Buttons from "./Buttons.js"
import './Question.scss';

function Question(props) {
    const { text } = props;
    return (
        <div className="Question container-fluid row">
        <div className="col-3"> 
            <Buttons/> 
        </div>
        <div className="col-9"> 
            <p>{text}</p>
        </div>
            <hr/>
        </div> 
    )
}

export default Question;