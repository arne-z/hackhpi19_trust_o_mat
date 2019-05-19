import React from "react";
import "./ProfileMetrik.scss";

function ProfileMetrik(props) {
  const {number, name, evaluationText} = props;
    return (
        <div className="ProfileMetrik">
          <div className="text-center">
              <h2> {number}% <br/> </h2>
              <h5> {name} <br/> <br/></h5>
              <p>{evaluationText} </p>
          </div>
        </div>
    )
}

export default ProfileMetrik;
