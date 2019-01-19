import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar, Tooltip } from 'recharts';

class TopEmployees extends Component {
    render() {
        const data = this.props.data
        // console.log("​TopEmployees -> render -> data", data)
        return (
            <div id="​TopEmployees">
                <BarChart
                    layout="vertical"
                    width={500}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis />
                    <YAxis dataKey="seller" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </div>
        )
    }
}


export default TopEmployees