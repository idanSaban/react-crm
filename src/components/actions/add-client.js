import React, { Component } from 'react';
import TextInputRow from './addClientRow';

class AddClient extends Component {

    render() {

        return (
            <div id="add-client-container">

                <TextInputRow label="First Name" value="" />
                <TextInputRow label="Surname" value="" />
                <TextInputRow label="Country" value="" />
                <TextInputRow label="Owner" value="" />
                <div className="button-container">
                    <span className="button">Add New Client</span>
                </div>
            </div>
        )
    }
}

export default AddClient