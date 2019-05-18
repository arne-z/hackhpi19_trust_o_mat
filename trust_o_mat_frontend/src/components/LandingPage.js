import React from 'react'
import './LandingPage.scss'
import Question from './Question'

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ value: event.target.value });
    }

    handleQuestionClick(question, answer) {
        this.setState((state) => { return { [question]: answer } });
    }

    render() {
        return (
            <div className="LandingPage">
                <div className="LandingPage__search">
                    <h2>What issues are important to you?</h2>
                    <input className="form-control" type="text" placeholder="Search" />
                </div>
                <Question text="Es sollen EU-weite verbindliche Bürgerentscheide eingeführt werden." state={this.state.bürgerentscheide} handleAnswer={answer => this.handleQuestionClick("bürgerentscheide", answer)} />
                <Question text="Die EU soll sich höhere Ziele zur Reduzierung des CO2-Ausstoßes setzen." state={this.state.co2ziele} handleAnswer={answer => this.handleQuestionClick("co2ziele", answer)} />
                <Question text="Die EU-Mitgliedsstaaten sollen eine gemeinsame Armee aufbauen." state={this.state.armee} handleAnswer={answer => this.handleQuestionClick("armee", answer)} />
                <Question text="Die Europäische Union soll vorrangig Bio-Landwirtschaft fördern." state={this.state.bioLandwirtschaft} handleAnswer={answer => this.handleQuestionClick("bioLandwirtschaft", answer)} />
            </div>
        );
    }
}

export default LandingPage;
