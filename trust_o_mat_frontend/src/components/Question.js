import React from 'react'

function Question(props) {
    const { text } = props;
    return (
        <div className="Question">
            <p>{text}</p>
        </div>
    )
}

export default Question;