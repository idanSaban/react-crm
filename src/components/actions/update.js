import React, { Component } from 'react';
import UpdateSelectInput from './updateSelectInput';
import DeclareSale from './declareSale';

class Update extends Component {

    inputHandler = e => {
        this.props.inputHandler(e)
    }

    render() {

        return (
            <div id="action-update">
                {/* <div>{this.props.client.name || " "}</div> */}
                <UpdateSelectInput id="update-owner" name="owner" label="Transfer Ownership To" value={this.props.client.owner} inputHandler={this.inputHandler} options={this.props.ownersList} buttonText="Transfer!" />
                <UpdateSelectInput id="update-emailType" name="emailType" label="Send Email" value={this.props.client.emailType} inputHandler={this.inputHandler} options={this.props.emailTypesList} buttonText="Send!" />
                <DeclareSale />

            </div >
        )
    }
}

export default Update