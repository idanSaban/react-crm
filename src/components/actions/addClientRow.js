import React, { Component } from 'react';

class TextInputRow extends Component {

    render() {


        return (
            <div className="text-input-row">
                <span className="label"> {this.props.label}:</span>

                <input type="text" value={this.props.value} onChange={this.props.inputHandler}></input>

            </div>
        )
    }
}

export default TextInputRow