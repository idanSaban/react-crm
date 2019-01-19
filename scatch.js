import React, { Component } from 'react';
import { XAxis, YAxis, CartesianGrid, BarChart, Bar } from 'recharts';
class Countries extends Component {
    render() {
        let countries = this.props.countries

        return (
            <div className="countries">
                <BarChart width={800}
                    height={300}
                    data={countries}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="counter" fill="#955196" />
                </BarChart>
            </div>
        );
    }
}

export default Countries