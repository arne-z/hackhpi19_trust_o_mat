import React from 'react'
import './LandingPage.scss'
import Question from './Question'

class LandingPage extends React.Component {
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
        return (
            <div className="LandingPage">
                <div className="LandingPage__search">
                    <h3>What issues are important to you?</h3>
                    <input className="form-control" type="text" placeholder="Search" />
                </div>
                <Question text="Es sollen EU-weite verbindliche Bürgerentscheide eingeführt werden." />
                <Question text="Die EU soll sich höhere Ziele zur Reduzierung des CO2-Ausstoßes setzen." />
                <Question text="Die EU-Mitgliedsstaaten sollen eine gemeinsame Armee aufbauen." />
                <Question text="Die Europäische Union soll vorrangig Bio-Landwirtschaft fördern." />
            </div>
        );
    }
}

export default LandingPage;