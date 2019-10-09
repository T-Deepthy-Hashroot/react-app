import React from 'react';
import SignUp from './SignUp.js'
import Login from './Login.js';
import Landing from './layout/Landing';
import SignUpConfirmation from './SignUpConfirmation'
import 'bootstrap/dist/css/bootstrap.css';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavigationBar from './admin/NavigationBar';
import Home from './components/Home';
class App extends React.Component {
  render(){
     return (
            <BrowserRouter>
              <Switch>        
             < PublicRoute restricted={false} component={Home} path="/" exact />
             <PublicRoute restricted={true} component={Login} path="/login" exact />
          <PrivateRoute component={Landing} path="/landing" exact />
                {/* <Route path="/landing" component={Landing} /> */}
                <Route path="/signup" component={SignUp} />
                {/* <Route path="/login" component={Login} /> */}
                <Route path="/users/:confirmationtoken/confirm_email" component={SignUpConfirmation} />
                <Route path="/nav" component={NavigationBar} />
                <Redirect from='/ ' to='/landing'/>
            </Switch>
            </BrowserRouter>
            
     );
  }
}
export default App;
