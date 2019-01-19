import React, { Component } from 'react';
import Axios from 'axios';
import Badges from './badges';
import Charts from './charts';

class Analytics extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    async componentDidMount() {
        const { data } = await Axios.get("http://localhost:4200/analytics")
        console.log("​Analytics -> componentDidMount -> data", data)
        this.setState({ data })
    }

    render() {

        return (<div>
            <Badges hottestCountry={this.state.data.hottestCountry} emailsSent={this.state.data.emailSent} newClients={this.state.data.newClients} outStandingClients={this.state.data.outStandingClients} />
            <Charts salesByCountry={this.state.data.salesByCountry} topSellers={this.state.data.topSellers} />
        </div>)
    }
}

export default Analytics