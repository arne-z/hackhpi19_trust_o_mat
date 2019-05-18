import React from "react";

function Party(props) {
    const { params } = props.match
    return (
        <div className="Party">
            Party Profile Placeholder
           <p> ID: {params.id}</p>
        </div>
    )
}

export default Party;