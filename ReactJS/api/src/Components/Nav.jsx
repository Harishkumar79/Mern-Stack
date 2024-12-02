import React from 'react'
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <>
            <ul>
                <li><NavLink to={'/states'}>States</NavLink></li>
                <li><NavLink to={'/events'}>Events</NavLink></li>
                <li><NavLink to={'/effects'}>Effects</NavLink></li>
            </ul>
        </>
    );
}

export default Nav;