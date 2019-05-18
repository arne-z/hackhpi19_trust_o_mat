import React from "react";
import Buttons from "./Buttons.js"
import './Question.scss';

function Question(props) {
    const { text } = props;
    return (
        <div className="Question container-fluid d-flex justify-content-left">
        <Buttons className="Question__button"/>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Question;