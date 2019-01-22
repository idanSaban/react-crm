import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

class SalesByCountry extends Component {

    render() {
        const data = this.props.data

        return (
            <div id="salesByCountry" className="chart-container">

                <h4 className="chart-table">Sales By
                    <select style={{ display: "inline-block" }}>
                        <option>Country</option>
                    </select>

                </h4>
                <ResponsiveContainer width="100%">
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#ffc400" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}


export default SalesByCountry