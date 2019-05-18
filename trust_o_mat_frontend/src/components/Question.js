import React from "react";
import Buttons from "./Buttons.js"
import './Question.scss';

function Question(props) {
    const { text, handleAnswer, state } = props;
    return (
        <div className="Question">
            <div className="container-fluid row">
                <div className="col-3">
                    <Buttons handler={handleAnswer} state={state} />
                </div>
                <div className="col-9 d-flex justify-content-start">
                    <p>{text}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Question;