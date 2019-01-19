import React, { Component } from 'react';

class UpdatePopUp extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            country: ""

        }
    }
    capitalize = str => {
        const arr = str.split(" ")
        return arr.map(word => {
            return word = word.charAt(0).toUpperCase() + word.slice(1)
        }).join(" ")
    }
    inputHandler = e => this.setState({ [e.target.name]: e.target.value })

    submitUpdate = () => {
        const obj = {
            name: this.capitalize(this.state.name),
            surname: this.capitalize(this.state.surname),
            country: this.capitalize(this.state.country)
        }
        this.props.submitUpdate(obj)
        this.clearUpdate()
    }

    clearUpdate = () => {
        this.setState({
            name: "",
            surname: "",
            country: ""
        })
        this.props.clearUpdate()
    }
    componentDidMount() {
        this.setState({
            name: this.props.name,
            surname: this.props.surname,
            country: this.props.country

        })
    }
    render() {
        return (
            <div id="pop-up-container" className={!this.props.show ? "disable" : null}>

                <div id="update"  >

                    <div onClick={this.clearUpdate} className="close-popup">
                        &times;
                    </div>

                    <h3>Update Client Details</h3>

                    <div className="popup-row">
                        Name
                    <input name="name" placeholder="Name" type="text" value={this.state.name} onChange={this.inputHandler} />
                    </div>

                    <div className="popup-row">
                        Surname
                    <input name="surname" placeholder="Surname" type="text" value={this.state.surname} onChange={this.inputHandler} />
                    </div>

                    <div className="popup-row">
                        Country
                    <input name="country" placeholder="Country" type="text" value={this.state.country} onChange={this.inputHandler} />
                    </div>

                    <div>
                        <div onClick={this.submitUpdate} className="submit">Submit</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdatePopUp