import React from 'react';
import Header from './Header.js'
import SignUp from './SignUp.js'
import Login from './Login.js';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render(){
     return (

            <Router>        
                 <Header />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
              
            </Router>

     );
  }
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  return <h3>Topics</h3>;
}

export default App;
