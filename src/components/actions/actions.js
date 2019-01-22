import React, { Component } from 'react';
import Update from './update';
import AddClient from './add-client';
import '../../style/actions.css'
import ClientInput from './client-input';
import Axios from 'axios';
class Actions extends Component {

    constructor() {
        super()
        this.state = {
            data: [],
            client: "",
            clientObj: {
                emailType: "",
                id: "",
                name: "",
                owner: "",
                sold: false
            }

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

    inputHandler = e => this.setState({ [e.target.name]: e.target.value })
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

    render() {
        console.log(this.getEmailTypesList())
        const client = {
            emailType: this.state.emailType,
            id: this.state.id,
            name: this.state.name,
            owner: this.state.owner,
            sold: this.state.sold
        }
        return (
            <div id="actions">
                <div className="action-section">
                    <h4>Update</h4>
                    <ClientInput inputHandler={this.clientInputHandler} value={this.state.client} names={this.state.data} />
                    <Update inputHandler={this.inputHandler} client={client} emailTypesList={this.getEmailTypesList()} ownersList={this.getOwnersList()} />
                </div>
                <div className="action-section">
                    <h4>Add Client</h4>
                    <AddClient />
                </div>
            </div>
        )
    }
}

export default Actions