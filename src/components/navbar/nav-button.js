import React, { Component } from 'react';

const NavButton = function ({ text, current }) {
    const className = current ? "nav-button current-page" : "nav-button"
    return (<div className={className}>{text}</div>)
}

export default NavButton