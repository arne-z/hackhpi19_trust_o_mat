import React from "react";
import icons from 'glyphicons'
import Buttons from "./Buttons.js"
import './Question.scss';

function Question(props) {
    const {text} = props;
    return (
        <div className="Question container-fluid d-flex justify-content-center">
            <p>{text}</p>
            <div>
                <Buttons/>
            </div>
        </div>
    )
}

export default Question;