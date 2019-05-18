import React from "react";
import ProfilePicture from "./ProfilePicture.js"
import ProfileInfo from "./ProfileInfo.js"
import "./ProfileHeader.scss";

function ProfileHeader() {
    return (
        <div className="ProfileHeader">
              <ProfilePicture image="https://pbs.twimg.com/profile_images/1112643494710034432/oXMQS6HI_400x400.png"/>
              <ProfileInfo/>
        </div>
    )
}

export default ProfileHeader;
