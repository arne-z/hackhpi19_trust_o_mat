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
              <ProfileMetrik number="13" name="Uniformity" evaluationText="This is unusual" />
              </div>
              <div className="col-4">
                  <ProfileMetrik number="80" name="Flip-Flop" evaluationText="" />
              </div>
              <div className="col-4">
                  <ProfileMetrik number="99" name="Solidarity" evaluationText="This is enraging" />
              </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
