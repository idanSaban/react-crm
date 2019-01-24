import React, { Component } from 'react';
import TextInputRow from './addClientRow';

class AddClient extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            surname: "",
            country: "",
            owner: ""
        }

    }
    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.name)
    }
    clear = () => {
        this.setState({
            firstName: "",
            surname: "",
            country: "",
            owner: ""
        })
    }

    clickHandler = () => {
        const capitalize = this.props.capitalize
        const { firstName, surname, country, owner } = this.state
        if (firstName === "" || surname === "" || country === "" || owner === "")
        {
            alert("empty fields!")
            return
        }
        const newClient = {
            name: `${capitalize(firstName)} ${capitalize(surname)}`,
            country: capitalize(country), owner: capitalize(owner)
        }
        this.props.addClient(newClient)
        this.clear()
    }
    render() {

        return (
            <div id="add-client-container">

                <TextInputRow inputHandler={this.inputHandler} name="firstName" label="First Name" value={this.state.firstName} />
                <TextInputRow inputHandler={this.inputHandler} name="surname" label="Surname" value={this.state.surname} />
                <TextInputRow inputHandler={this.inputHandler} name="country" label="Country" value={this.state.country} />
                <TextInputRow inputHandler={this.inputHandler} name="owner" label="Owner" value={this.state.owner} />
                <div className="button-container">
                    <span className="button" onClick={this.clickHandler}>Add New Client</span>
                </div>
            </div>
        )
    }
}

export default AddClient