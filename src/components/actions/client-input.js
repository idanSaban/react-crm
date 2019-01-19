import React, { Component } from 'react';

class ClientInput extends Component {

    inputHandler = e => {
        this.props.inputHandler(e.target.value)
    }

    render() {
        return (
            <div>
                <span>Client: </span>
                <input list="clients" id="clientInput" value={this.props.val} onChange={this.inputHandler} name="name" />
                <datalist id="clients" >

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