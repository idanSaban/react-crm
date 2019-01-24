import React, { Component } from 'react';
import UpdateSelectInput from './updateSelectInput';
import DeclareSale from './declareSale';

class Update extends Component {

    inputHandler = e => {
        this.props.inputHandler(e)
    }

    render() {
        // this.props.update
        return (
            <div id="action-update">
                {/* <div>{this.props.client.name || " "}</div> */}
                <UpdateSelectInput update={this.props.update} id="update-owner" name="owner" label="Transfer Ownership To" value={this.props.client.owner} inputHandler={this.inputHandler} options={this.props.ownersList} buttonText="Transfer!" />
                <UpdateSelectInput update={this.props.update} id="update-emailType" name="emailType" label="Change Email Type" value={this.props.client.emailType} inputHandler={this.inputHandler} options={this.props.emailTypesList} buttonText="Send!" />
                <DeclareSale update={this.props.update} />

            </div >
        )
    }
}

export default Update