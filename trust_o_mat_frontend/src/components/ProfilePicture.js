import React from "react";
import "./ProfilePicture.scss";

function ProfilePicture(props) {
  const {image} = props;
    return (
        <div className="ProfilePicture">
            <div id="image-cropper">
              <img src={image} className= "text-center"/>
            </div>
        </div>
    )
}

export default ProfilePicture;
