import React, { Component } from 'react';
import SalesByCountry from './salesByCountry';
import TopEmployees from './topEmployees';
import Past30Sales from './past30Sales';
import ClientAcquisition from './clientAcquisition';

class Charts extends Component {

    render() {
        console.log(this.props)
        return (
            <div id="charts">
                <SalesByCountry data={this.props.salesByCountry} />
                <TopEmployees data={this.props.topSellers} />
                <Past30Sales data={this.props.past30Sales} />
                <ClientAcquisition data={this.props.clientAcquisition} />
            </div>
        )
    }
}

export default Charts