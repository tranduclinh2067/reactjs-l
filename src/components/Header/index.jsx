import React, { Component } from 'react';
import './style.scss';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends Component {
    
    render() {
        return (
                <div className='control-header'>
                    <div className='control-item'>
                        <Link className='item' to="/">
                        </Link>
                        <Link className='item' to="/xx"></Link>
                        <Link className='item' to="/login"></Link>
                        <Link className='item' to="/card"></Link>
                    </div>
                </div>

        )
    }
}

export default Header
