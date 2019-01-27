import React, { Component } from 'react';
import '../../style/home.css'
import Moment from 'moment';
class Home extends Component {
    getGreeting() {
        const afternoon = 12
        const evening = 17
        const time = Moment().format('HH')
        return time > evening ? "Evening" : time > afternoon ? "Afternoon" : "Morning"
    }

    render() {
        const greeting = this.getGreeting()
        return (
            <div id="home">
                <h1>Good {greeting} !</h1>

                <div className="sk-folding-cube">
                    <div className="sk-cube1 sk-cube"></div>
                    <div className="sk-cube2 sk-cube"></div>
                    <div className="sk-cube4 sk-cube"></div>
                    <div className="sk-cube3 sk-cube"></div>
                </div>
            </div>
        )
    }
}

export default Home