import React, { Component } from 'react';

class DeclareSale extends Component {
    clickHandler = () => {
        this.props.update("sold")
    }
    render() {
        return (
            <div id="declare-sale">
                <span className="label">
                    Declare Sale
                </span>
                <span className="space">

                </span>
                <span className="button" onClick={this.clickHandler}>
                    Declare!
                </span>
            </div>
        )
    }
}

export default DeclareSale