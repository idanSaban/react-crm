import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar, Tooltip, ResponsiveContainer } from 'recharts';

class SalesByCountry extends Component {

    render() {
        const data = this.props.data

        return (
            <div id="salesByCountry">

                <BarChart width={800}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
            </div>
        );
    }
}


export default SalesByCountry