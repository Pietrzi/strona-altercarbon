import React from 'react';
import Hamburger from './Hamburger';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/onas'>O nas</NavLink>
                </li>
                <li>
                    <NavLink to='/galeria'>Galerie</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;