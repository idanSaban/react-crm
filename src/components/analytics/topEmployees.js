import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';


class TopEmployees extends Component {
    render() {
        const data = this.props.data
        return (
            <div id="​TopEmployees" className="chart-container">
                <h4 className="chart-table">Top Employees</h4>
                <ResponsiveContainer >
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                        <CartesianGrid />
                        <Tooltip />

                        <XAxis dataKey="seller" type="category" />
                        <YAxis type="number" />
                        <Bar dataKey="count" barSize={50} fill='#086788' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        )
    }
}


export default TopEmployees