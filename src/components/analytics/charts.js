import React, { Component } from 'react';
import SalesBy from './salesBy';
import TopEmployees from './topEmployees';
import Past30Sales from './past30Sales';
import ClientAcquisition from './clientAcquisition';

class Charts extends Component {

    render() {
        console.log(this.props)
        return (
            <div id="charts">
                <SalesBy data={this.props.salesBy} />
                <TopEmployees data={this.props.topSellers} />
                <Past30Sales data={this.props.past30Sales} />
                <ClientAcquisition data={this.props.clientAcquisition} />
            </div>
        )
    }
}

export default Charts