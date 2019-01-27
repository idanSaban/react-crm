import React, { Component } from 'react';
import ClientsTable from './clients-table';
import ClientsFilter from './clients-filter';
import UpdatePopUp from './update-PopUp';
import axios from 'axios'
import '../../style/clients.css'
import Loading from '../Loading/loading';

class Clients extends Component {
    constructor() {
        super()
        this.state = {
            currentPage: 0,
            data: [],
            filter: false,
            filterCategory: "name",
            filterText: "",
            showPopUp: false,
            updateId: "",
            fullName: "",
            country: ""
        }
    }

    nextPage = totalPages => {
        let currentPage = this.state.currentPage + 1
        if (currentPage < totalPages)
        {
            currentPage++
            this.setState({ currentPage })
        }
        else
        {
            return
        }
    }

    previousPage = () => {
        let currentPage = this.state.currentPage
        if (currentPage > 0)
        {
            currentPage--
            this.setState({ currentPage })
        }
        else
        {
            return
        }
    }

    // getTotalPages = () => Math.floor([...this.state.data].length / 20) + 1

    async getData() {
        const { data } = await axios.get('http://localhost:4200/clients')
        return data
    }

    componentDidMount = async () => {
        const data = await this.getData()
        this.setState({ data })
    }

    filter = (category, text) => {
        if (text === "")
        {
            this.setState({ filter: false })
        }
        else
        {
            this.setState({ filter: true })
        }
        this.setState({
            filterCategory: category,
            filterText: text,
            currentPage: 0
        })
    }

    update = (id, name, surname, country) => {
        this.setState({
            showPopUp: true,
            updateId: id,
            name,
            surname,
            country
        })
    }
    clearUpdate = () => {
        this.setState({
            showPopUp: false,
            updateId: ""
        })
    }
    submitUpdate = async obj => {
        console.log(obj)
        const newObj = {}
        if (obj.name !== "" && obj.surname !== "")
        {
            newObj.name = `${obj.name} ${obj.surname}`
        }
        else if (obj.name !== "")
        {
            newObj.name = `${obj.name} ${this.state.surname}`
        }
        else if (obj.surname !== "")
        {
            newObj.name = `${this.state.name} ${obj.surname}`
        }
        if (obj.country !== "")
        {
            newObj.country = obj.country
        }
        const response = await axios.put(`http://localhost:4200/client/${this.state.updateId}`, newObj)

        //update local data :
        const data = [...this.state.data]
        const index = data.findIndex(c => c._id === response.data._id)
        data[index] = response.data
        this.setState({
            data
        })
    }

    render() {
        let dataToDisplay = [...this.state.data]

        const { filter, filterCategory, filterText } = this.state

        if (filter || filterCategory === "sold")
        {
            dataToDisplay = dataToDisplay.filter(c => {
                return filterCategory !== "sold" ? String(c[filterCategory]).toLowerCase().match(filterText.toLowerCase()) : c[filterCategory]
            })
        }

        const totalPages = Math.ceil(dataToDisplay.length / 20)
        const firstItem = this.state.currentPage * 20
        dataToDisplay = dataToDisplay.splice(firstItem, 20)

        return this.state.data.length > 0 ? (
            <div id="clients" >
                <ClientsFilter nextPage={this.nextPage} filter={this.filter} previousPage={this.previousPage} currentPage={this.state.currentPage} totalPages={totalPages} filterCategory={this.state.filterCategory} filterText={this.state.filterText} />
                <ClientsTable data={dataToDisplay} update={this.update} />
                {this.state.showPopUp && <UpdatePopUp name={this.state.name} surname={this.state.surname} country={this.state.country} show={this.state.showPopUp} clearUpdate={this.clearUpdate} submitUpdate={this.submitUpdate} />}
            </div>
        ) :
            (
                <Loading />
            )
    }
}
export default Clients