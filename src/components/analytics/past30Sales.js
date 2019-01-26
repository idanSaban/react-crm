import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
class Past30Sales extends Component {

    render() {
        const data = this.props.data
        return (
            <div id="past30Sales" className="chart-container">
                <h4 className="chart-table">Past 30 Days Sales</h4>
                <ResponsiveContainer width="100%">
                    <LineChart width={730} height={250} data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line dataKey="count" type="natural" strokeWidth={2} stroke="#086788" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
        )
    }
}
export default Past30Sales