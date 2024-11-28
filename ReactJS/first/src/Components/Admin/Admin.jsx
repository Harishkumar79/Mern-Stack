import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function Admin() {
    return (
        <>
            <div className='A-box'>
                <div>
                    <h1>Admin Panel</h1>
                </div>
                <div className='content-div'>
                    <ul>
                        <li><NavLink to={'dash'}>Dashboard</NavLink></li>
                        <li><NavLink to={'product'}>Products</NavLink></li>
                    </ul>
                </div>
                <div className='outlet'>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Admin;