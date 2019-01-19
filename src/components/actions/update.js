import React, { Component } from 'react';

class Update extends Component {
    constructor() {
        super()
        this.state = {
            owner: "",
            emailType: "",
            sold: ""

        }
    }
    // componentDidMount() {
    //     console.log(this.props)
    //     if (this.props.client)
    //     {
    //         alert()
    //         const { owner, emailType, sold } = this.props.client
    //         console.log(this.props)
    //         this.setState({ owner, emailType, sold })
    //     }
    // }
    inputHandler = e => {
        this.props.inputHandler(e.target.value)
    }
    render() {
        // if (this.props.client)
        // {
        //     alert()
        //     const { owner, emailType, sold } = this.props.client
        //     console.log(this.props)
        //     this.setState({ owner, emailType, sold })
        // }

        return (
            <div>
                <div>Update{this.props.client ? ": " + this.props.client.name : ""}</div>

                <div>
                    <div className="update-input">
                        <span>Transfer ownership</span>
                        <input id="owner" name="owner" onChange={this.inputHandler} value={this.props.client && this.props.client.owner} />
                    </div>

                    <div className="update-input">

                    </div>

                    <div className="update-input">

                    </div>
                </div>


            </div >
        )
    }
}

export default Update