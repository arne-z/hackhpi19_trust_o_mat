import React from 'react'
import ProfileHeader from './ProfileHeader.js'
import './Profile.scss'

class Profile extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            value: '',
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const { params } = this.props.match
        return (
            <div className="Profile">
                <p> ID: {params.id}</p>
                <ProfileHeader />
            </div>
        );
    }
}

export default Profile;
