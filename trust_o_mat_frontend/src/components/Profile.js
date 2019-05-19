import React from 'react'
import ProfileHeader from './ProfileHeader.js'
import './Profile.scss'
import IssueTable from './IssueTable.js'
import {getIssues, getStances} from '../RequestController';

class Profile extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
        getIssues().then((issues) => {
          const stancePromises = [];
          for (const issue of issues.data) {
            stancePromises.push(getStances(issue, props.match.id));
          }
          Promise.all(stancePromises).then((stances) => {
            var stanceData = stances.map((stance) => stance.data);
            this.setState( { issues : issues.data, stances: stanceData} );
          });
        });

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
       const { params } = this.props.match;
       if (!this.state.issues) return null;
        return (
            <div className="Profile">
              <ProfileHeader/>
              <IssueTable issues={this.state.issues} stances={this.state.stances} politician={params.id}/>
            </div>
        );
    }
}

export default Profile;
