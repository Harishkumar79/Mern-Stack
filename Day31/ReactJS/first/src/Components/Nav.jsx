import React from 'react'
import {NavLink} from 'react-router-dom'
function Nav() {
    return (
        <nav>
            <div className="nav-container">
                <ul className="links">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/profile/:uname'>Account</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;