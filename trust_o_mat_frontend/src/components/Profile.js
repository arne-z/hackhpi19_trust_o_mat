import React from 'react'
import ProfileHeader from './ProfileHeader.js'
import './Profile.scss'
import {getIssues} from '../RequestController';

class Profile extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
        this.issues = getIssues();

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
       const { params } = this.props.match;
       console.log(this.issues);
        return (
            <div className="Profile">
              <ProfileHeader/>

            </div>
        );
    }
}

export default Profile;
