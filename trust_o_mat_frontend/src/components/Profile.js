import React from 'react'
import ProfileHeader from './ProfileHeader.js'
import './Profile.scss'
import IssueTable from './IssueTable.js'
import RequestController from '../RequestController';

class Profile extends React.Component {
    constructor(props) {
        super(props);


        this.state = {};
        this.state.IssueTable = null;

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    getIssuetable() {
        return (<IssueTable issues={this.state.issues} stances={this.state.stances} politician={this.props.match.params.id} />);
    }

    render() {
        return (
            <div className="Profile">
                <ProfileHeader />
                {this.state.IssueTable}
            </div>
        );
    }
}

export default Profile;
