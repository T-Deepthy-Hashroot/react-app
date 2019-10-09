/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from "react-router-dom";


class NavigationBar extends React.Component  {
  constructor(props){
    super(props);
   console.log("hello");
  }
  
    render(){
      console.log(":hello");
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

export default NavigationBar;
