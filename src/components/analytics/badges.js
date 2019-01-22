import React, { Component } from 'react';
import "../../style/analytics.css"
import Badge from './badge';
import { FaEnvelope, FaChartLine, FaUserAlt, FaGlobeAmericas } from 'react-icons/fa';

class Badges extends Component {


    render() {

        const mailIcon = <FaEnvelope />
        const clientIcon = <FaChartLine />
        const outStandingClients = <FaUserAlt />
        const countrys = < FaGlobeAmericas />
        return (
            <div id="badges">
                <Badge icon={clientIcon} text={this.props.newClients} label={"New Clients"} badge="new-client" />
                <Badge icon={mailIcon} text={this.props.emailsSent} label={"Emails Sent"} badge="email-sent" />
                <Badge icon={outStandingClients} text={this.props.outStandingClients} label={"Outstanding Clients"} badge="outstanding-client" />
                <Badge icon={countrys} text={this.props.hottestCountry} label={"Hottest Country"} badge="hottest-country" />
            </div>


        )
    }



}

export default Badges