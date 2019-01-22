import React, { Component } from 'react';

class DeclareSale extends Component {
    render() {
        return (
            <div id="declare-sale">
                <span className="label">
                    Declare Sale
                </span>
                <span className="space">

                </span>
                <span className="button" onClick="this.props.clickHandler">
                    Declare!
                </span>
            </div>
        )
    }
}

export default DeclareSale