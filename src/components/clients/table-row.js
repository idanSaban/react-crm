import React, { Component } from 'react';
import Moment from 'react-moment';
import { GoCheck, GoDash } from "react-icons/go";

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
                    <div className="row-col">{p.name[0]}</div>
                    <div className="row-col">{p.name[1]}</div>
                    <div className="row-col">{p.country}</div>
                    <div className="row-col"><Moment format="YYYY/MM/DD">{p.firstContact}</Moment></div>
                    <div className="row-col">{p.emailType}</div>
                    <div className="row-col">{p.sold ? <GoCheck /> : <GoDash />}</div>
                    <div className="row-col">{p.owner}</div>
                </div>
            )
        );
    }
}

export default TableRow