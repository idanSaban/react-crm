import React, { Component } from 'react';
import Moment from 'react-moment';

class TableRow extends Component {
    update = () => this.props.update(this.props.data._id, this.props.data.name.split(" ")[0], this.props.data.name.split(" ")[1], this.props.data.country)

    render() {
        const p = { ...this.props.data }
        if (!p || p === [])
        {
            return <div></div>
        }

        p.name = p.name.split(" ")
        return (
            (
                <div onClick={this.update} className="table-row">
                    <div>{p.name[0]}</div>
                    <div>{p.name[1]}</div>
                    <div>{p.country}</div>
                    <div><Moment format="YYYY/MM/DD">{p.firstContact}</Moment></div>
                    <div>{p.emailType}</div>
                    <div>{p.sold ? "V" : "-"}</div>
                    <div>{p.owner}</div>
                </div>
            )
        );
    }
}

export default TableRow