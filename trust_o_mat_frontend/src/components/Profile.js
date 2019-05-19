import React from 'react'
import ProfileHeader from './ProfileHeader.js'
import './Profile.scss'
import IssueTable from './IssueTable.js'

function Profile() {
        return (
            <div className="Profile">
              <ProfileHeader/>
              <IssueTable />
            </div>
        );
    }

export default Profile;