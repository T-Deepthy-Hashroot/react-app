/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import { Link } from "react-router-dom";


class Header extends React.Component  {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to="signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </nav>
           
           )
    }

}

export default Header;
