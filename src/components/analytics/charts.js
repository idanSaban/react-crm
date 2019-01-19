import React, { Component } from 'react';
import SalesByCountry from './salesByCountry';
import TopEmployees from './topEmployees';

class Charts extends Component {

    render() {

        return (
            <div id="charts">
                <SalesByCountry data={this.props.salesByCountry} />
                <TopEmployees data={this.props.topSellers} />
            </div>
        )
    }
}

export default Charts