import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

class SalesBy extends Component {
    constructor() {
        super()
        this.state = {
            selector: "country"
        }
    }
    selectorHandler = (e) => this.setState({ selector: e.target.value })
    render() {
        const data = this.props.data

        return (
            <div id="salesBy" className="chart-container">

                <h4 className="chart-table">Sales By
                    <select onChange={this.selectorHandler} >
                        <option value="country">Country</option>
                        <option value="owner">Owner</option>
                        <option value="month">Month</option>
                        <option value="emailType">Email Type</option>

                        {/* {Object.keys(this.props.data).map(k => <option>{k}</option>)} */}

                    </select>
                </h4>
                <ResponsiveContainer>
                    <BarChart
                        data={data[this.state.selector]}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" barSize={50} fill="#086788" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}


export default SalesBy