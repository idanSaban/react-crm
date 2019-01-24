import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, ComposedChart, Bar, ResponsiveContainer } from 'recharts';

class TopEmployees extends Component {
    render() {
        const data = this.props.data
        return (
            <div id="​TopEmployees" className="chart-container">
                <h4 className="chart-table">Top Employees</h4>
                <ResponsiveContainer >
                    <ComposedChart
                        layout="vertical"
                        data={data}
                        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                        <CartesianGrid />
                        <XAxis type="number" />
                        <YAxis dataKey="seller" type="category" />
                        <Bar dataKey="count" barSize={20} fill='#4f9b4f' />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        )
    }
}


export default TopEmployees