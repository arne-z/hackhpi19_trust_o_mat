import React from "react";
import icons from 'glyphicons'
import Buttons from "./Buttons.js"
import './Question.scss';

function Question(props) {
    const {text} = props;
    return (
        <div className="Question container-fluid ">
            <p>{text}</p>
            <Buttons/>
        </div>
    )
}

export default Question;