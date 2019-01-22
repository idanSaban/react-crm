import React, { Component } from 'react';


class Badge extends Component {
    render() {

        return (<div className="badge-container">
            <div id={this.props.badge} className="badge">
                {this.props.icon}
            </div>

            <div className="info-container">
                <div className="badge-info">
                    {this.props.text}
                </div>

                <div className="badge-label">
                    {this.props.label}
                </div>
            </div>
        </div>)
    }
}

export default Badge