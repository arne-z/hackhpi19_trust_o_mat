import React from "react";
import ProfileMetrik from './ProfileMetrik.js'
import './ProfileInfo.scss'


function ProfileInfo() {
    return (
        <div className="ProfileInfo rounded">
            <div className="text-center" id="general">
            <h2 id= "name"> Dr. Katarina Barley <br/></h2>
            <h3> SPD <hr/> </h3>
          </div>
          <div className="row">
            <div className="col-4">
              <ProfileMetrik number="42" name="Uniformity" text="This is unusual" name/>
              </div>
              <div className="col-4">
                  <ProfileMetrik number="69" name="Flip-Flop" text="" name/>
              </div>
              <div className="col-4">
                  <ProfileMetrik number="10" name="Solidarity" text="This is enraging" name/>
              </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
