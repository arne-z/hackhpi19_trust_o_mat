import React from "react";
import { CheckCircle, Cancel } from '@material-ui/icons';
import "./Buttons.scss"

function Buttons(props) {
    return (
        <div className="Buttons btn-group" role="group">
            <button type="button" className="btn btn-secondary"><CheckCircle /></button>
            <button type="button" className="btn btn-secondary"><Cancel /></button>
        </div>
    );
}

export default Buttons;