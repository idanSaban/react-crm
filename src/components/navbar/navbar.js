import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import NavButton from './nav-button';
import '../../style/navbar.css'
class NavBar extends Component {
    render() {
        const path = window.location.pathname
        const pages = ["Clients", "Actions", "Analytics"]
        const buttons = pages.map(b => {
            return (
                <Link key={b} to={`/${b}`}>
                    <NavButton key={b} text={b} current={b.toLowerCase() === path.slice(1).toLowerCase()} />
                </Link>
            )
        })

        return (
            <div id="navbar">
                <Link to="/">
                    <span id="logo" >Company</span>
                </Link>
                {buttons}
            </div>
        )
    }
}

export default NavBar