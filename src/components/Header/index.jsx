import React, { Component } from 'react';
import './style.scss';
import { BrowserRouter as Router, NavLink } from "react-router-dom";

class Header extends Component {
    
    render() {
        return (
                <div className='control-header'>
                    <div className='control-item'>
                        <NavLink activeClassName="current" exact={true} className='item' to="/"></NavLink>
                        <NavLink activeClassName="current" className='item' to="/xx"></NavLink>
                        <NavLink activeClassName="current" className='item' to="/login"></NavLink>
                        <NavLink activeClassName="current" className='item' to="/card"></NavLink>
                    </div>
                </div>

        )
    }
}

export default Header
