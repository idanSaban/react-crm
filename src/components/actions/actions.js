import React, { Component } from 'react';
import Update from './update';
import AddClient from './add-client';
import '../../style/actions.css'
import ClientInput from './client-input';
import Axios from 'axios';
import Loading from '../Loading/loading';
class Actions extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            client: "",
            madeChange: false
            // clientObj: {
            //     emailType: "",
            //     id: "",
            //     name: "",
            //     owner: "",
            //     sold: false
            // }

        }
    }
    localUpdate = (field) => {
        const data = [...this.state.data]
        const index = data.findIndex(c => c.id === this.state.id)
        const update = field === "sold" ? true : this.state[field]
        data[index][field] = update
        this.setState({ data })
    }

    capitalize = str => {
        const arr = str.split(" ")
        return arr.map(word => {
            return word = word.charAt(0).toUpperCase() + word.slice(1)
        }).join(" ")
    }

    update = async (field) => {
        if (this.state.id && (this.state.madeChange || field === "sold"))
        {
            let update = field === "sold" ? { sold: true } : { [field]: this.state[field] }
            await Axios.put(`http://localhost:4200/client/${this.state.id}`, update)
            this.localUpdate(field)
        } else if (!this.state.id)
        {
            alert("choose user to edit")
        }
        else
        {
            alert("changes havn't been changed")
        }
    }

    clientInputHandler = async e => {
        const client = this.state.data.find(c => c.name === e.target.value)
        if (client)
        {
            const { emailType, id, name, owner, sold } = client
            await this.setState({
                [e.target.name]: e.target.value,
                emailType,
                id,
                name,
                owner,
                sold
            })
        } else
        {
            await this.setState({
                [e.target.name]: e.target.value,
                emailType: "",
                id: "",
                name: "",
                owner: "",
                sold: false

            })
        }
    }

    inputHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
            madeChange: true
        })
    }
    async componentDidMount() {
        const { data } = await Axios.get('http://localhost:4200/clients/actions')
        this.setState({ data })
    }

    getOwnersList() {
        let owners = {}
        this.state.data.forEach(c => owners[c.owner] = null)
        return Object.keys(owners)
    }
    getEmailTypesList() {
        let emailTypes = {}
        this.state.data.forEach(c => emailTypes[c.emailType] = null)
        return Object.keys(emailTypes).sort()
    }
    addClient = async (client) => {
        const response = await Axios.post("http://localhost:4200/client", client)
        console.log('​Actions -> addClient -> response', response.data)
        const data = [... this.state.data]
        response.data.id = response.data._id
        data.push(response.data)
        console.log('​Actions -> addClient -> data', data)
        this.setState({ data })

    }
    render() {
        const client = {
            emailType: this.state.emailType,
            id: this.state.id,
            name: this.state.name,
            owner: this.state.owner,
            sold: this.state.sold
        }

        return this.state.data.length > 0 ? (<div id="actions">
            <div className="action-section">
                <h4>Update</h4>
                <ClientInput inputHandler={this.clientInputHandler} value={this.state.client} names={this.state.data} />
                <Update update={this.update} inputHandler={this.inputHandler} client={client} emailTypesList={this.getEmailTypesList()} ownersList={this.getOwnersList()} />
            </div>
            <div className="action-section">
                <h4>Add Client</h4>
                <AddClient capitalize={this.capitalize} addClient={this.addClient} />
            </div>
        </div>
        ) : (
                <Loading />
            )
    }
}

export default Actions