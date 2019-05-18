import React from "react";
import { CheckCircle, Cancel } from '@material-ui/icons';
import "./Buttons.scss"

function getButtonColor(state) {
    if (state === undefined) {
        return { first: 'none', second: 'none' }
    } else if (state === false) {
        return { first: 'none', second: '3px solid red' }
    } else {
        return { first: '3px solid blue', second: 'none' }
    }
}

function Buttons(props) {
    const { handler, state } = props;
    const buttonColors = getButtonColor(state)

    return (
        <div className="Buttons btn-group" role="group">
            <button type="button" className="btn btn-secondary" style={{ border: buttonColors.first }} onClick={() => handler(true)}><CheckCircle /></button>
            <button type="button" className="btn btn-secondary" style={{ border: buttonColors.second }} onClick={() => handler(false)}><Cancel /></button>
        </div >
    );
}

export default Buttons;