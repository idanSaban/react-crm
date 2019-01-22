import React, { Component } from 'react';
import { ResponsiveContainer, Pie, PieChart, LabelList, YAxis, CartesianGrid, LineChart, Line, Tooltip } from 'recharts';


class ClientAcquisition extends Component {
    render() {
        const data = this.props.data
        console.log("​ClientAcquisition -> render -> data", data)

        return (
            <div id="clientAcquisition" className="chart-container">
                <h4 className="chart-table">Client Acquisition</h4>
                <ResponsiveContainer width="100%">
                    <PieChart>
                        <Tooltip />
                        <Pie data={data} dataKey="count" cx="50%" cy="50%" outerRadius={50} fill="#427f8f" label />
                    </PieChart>


                </ResponsiveContainer>
            </div>
        )
    }
}


export default ClientAcquisition