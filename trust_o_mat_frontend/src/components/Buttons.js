import React from "react";
import icons from 'glyphicons'
import "./Buttons.scss"

function Buttons() {
    return (<div className= "row">
            <div className="col"></div>
            <div className="col">
                {icons.ok}
            </div>
            <div className="col">
                {icons.ok}
            </div>
            <div className="col"></div>
        </div>
           );
}

export default Buttons;