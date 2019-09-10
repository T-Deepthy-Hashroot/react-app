import React from 'react';
import SignUp from './SignUp.js'
import Login from './Login.js';
import Landing from './layout/Landing';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  render(){
     return (

            <Router>        
                <Route path="/landing" component={Landing} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                  <Redirect from='/ ' to='/landing'/>
              
            </Router>
            

     );
  }
}


export default App;
