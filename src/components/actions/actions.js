import React, { Component } from 'react';
import Update from './update';
import AddClient from './add-client';
import '../../style/actions.css'
import ClientInput from './client-input';
import Axios from 'axios';
class Actions extends Component {

    //     constructor() {
    //         super()
    //         this.state = {
    //             data: [],
    //             clientInput: "",
    //             owner: "",
    //             emailType: "",
    //             sold: ""

    //         }
    //     }
    //     updateInputHandler = (e) => {
    //         this.setState({ [e.target.name]: e.target.value })
    //     }
    //     async componentDidMount() {
    //         // const response = await this.getData()
    //         const { data } = await Axios.get('http://localhost:4200/clients/actions')
    //         this.setState({ data })
    //     }

    //     inputHandler = (val) => {
    //         const client = this.state.data.find(c => c.name === this.state.clientInput)
    //         client && this.setState({
    //             clientInput: val,
    //             owner: client.owner,
    //             emailType: client.emailType,
    //             sold: client.sold
    //         })
    //     }
    //     // getOwnersList() {
    //     //     const ownersObj = {}
    //     //     this.state.data.forEach(c => ownersObj[c.owner] = true)
    //     //     return Object.keys(ownersObj)
    //     // }

        render() {
            return (
                <div id="actions">
    {/* //                 <ClientInput val={this.state.clientInput} inputHandler={this.inputHandler} names={this.state.data.map(c => { return { name: c.name, id: c.id } })} />
    //                 <Update inputHandler={this.updateInputHandler} />
    //                 <AddClient /> */}
    //             </div>
            )
        }
    }

    export default Actions