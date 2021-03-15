import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../Assets/image/logo.jpg';

export const Navbar = () => (
    <div className="navbar">
        <div className="navbar-content">
            <div className="navbar-logo">
                <img alt="logo" src={Logo} />
            </div>
            <div className="navbar-search">
                <input type="text" placeholder="Search" />
            </div>
        </div>
        <div className="navbar-navigation">
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">Menu1</Link>
              </li>
              <li>
                <Link to="#">Menu2</Link>
              </li>
              <li>
                <Link to="#">Menu3</Link>
              </li>
            </ul>
        </div>
    </div>
);

export default Navbar;