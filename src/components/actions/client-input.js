import React, { Component } from 'react';

class ClientInput extends Component {
    inputHandler = e => {
        this.props.inputHandler(e)
    }

    render() {
        return (
            <div id="action-client-input">
                <span>Client: </span>
                <input placeholder="Choose Client" list="clients-datalist" id="clientInput" value={this.props.value} onChange={this.inputHandler} name="client" />
                <datalist id="clients-datalist" >

                    {this.props.names.map(c => {
                        return (
                            <option key={c.id} data-id={c.id} value={c.name} />
                        )
                    })}
                </datalist>

            </div >
        )
    }
}

export default ClientInput