import React, { Component } from 'react';

class UpdateSelectInput extends Component {

    clickHandler = () => {
        this.props.update(this.props.name)
    }
    render() {
        return (
            <div id={this.props.id} className="action-update-input" >
                <span className="label">{this.props.label}</span>
                <select name={this.props.name} onChange={this.props.inputHandler} value={this.props.value}>
                    {this.props.options.map(o => <option key={o} value={o}>{o}</option>)}
                </select>
                <span className="button" onClick={this.clickHandler}>
                    {this.props.buttonText}
                </span>
            </div>
        )
    }
}

export default UpdateSelectInput