import React, { Component } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

class ClientsFilter extends Component {


    inputHandler = (e) => this.props.filter(this.props.filterCategory, e.target.value)

    selectHandler = (e) => this.props.filter(e.target.value, this.props.filterText)
    nextPage = () => this.props.nextPage(this.props.totalPages)
    render() {

        return (
            <div id="clientsFilter">
                <select id="category-select" name="category" onChange={this.selectHandler}>
                    <option value="name">Name</option>
                    <option value="country">Country</option>
                    <option value="emailType">Email Type</option>
                    <option value="owner">Owner</option>
                    <option value="sold">Sold</option>
                </select>

                <input placeholder="filter by" id="text-input" name="text" type="text" onChange={this.inputHandler} value={this.props.filterText} />

                <span id="p" className="btn" onClick={this.props.previousPage}> <FaChevronCircleLeft /> </span>
                <span id="current-page">
                    {this.props.currentPage + 1}/{this.props.totalPages}
                </span>
                <span id="n" className="btn" onClick={this.nextPage}><FaChevronCircleRight /></span>
            </div>
        )
    }
}

export default ClientsFilter