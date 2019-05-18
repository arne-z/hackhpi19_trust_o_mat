import React from "react";
import icons from 'glyphicons'
import "./Buttons.scss"

function Buttons() {
    return (<div className= "row">
        <div class="col">
            {icons.heart}
        </div>
        <div class="col">
            {icons.ok}
        </div>
    </div>
           );
}

export default Buttons;