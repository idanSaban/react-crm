import React, { Component } from 'react';
import { ResponsiveContainer, Pie, PieChart, Cell, Label, LabelList, YAxis, CartesianGrid, LineChart, Line, Tooltip } from 'recharts';
// import { XAxis, YAxis, CartesianGrid, BarChart, Bar, ResponsiveContainer } from 'recharts';



class ClientAcquisition extends Component {
    render() {
        const data = this.props.data
        console.log("​ClientAcquisition -> render -> data", data)

        // return (
        //     <div id="clientAcquisition" className="chart-container">
        //         <h4 className="chart-table">Client Acquisition</h4>
        //         <ResponsiveContainer >
        //             <BarChart
        //                 data={data}
        //                 margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
        //                 <CartesianGrid />
        //                 <XAxis dataKey="name" type="category" />
        //                 <YAxis type="number" />
        //                 <Bar dataKey="count" barSize={50} fill='#086788' />
        //             </BarChart>
        //         </ResponsiveContainer>
        //     </div>
        // )

        return (
            <div id="clientAcquisition" className="chart-container">
                <h4 className="chart-table">Client Acquisition</h4>
                <ResponsiveContainer width="100%">
                    <PieChart>
                        <Tooltip />
                        <Pie data={data} dataKey="count" cx="50%" cy="50%" outerRadius={50} fill="#086788" label>
                        </Pie>

                    </PieChart>


                </ResponsiveContainer>
            </div>
        )
    }
}


export default ClientAcquisition