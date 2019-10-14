import React from "react";
import SignUp from "./SignUp.js";
import Login from "./Login.js";
import Landing from "./layout/Landing";
import SignUpConfirmation from "./SignUpConfirmation";
import "bootstrap/dist/css/bootstrap.css";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import "./App.css";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute
            restricted={true}
            component={Login}
            path="/login"
            exact
          />
          <PublicRoute restricted={true} path="/signup" component={SignUp} exact/>
          <PublicRoute
            restricted={true}
            path="/users/:confirmationtoken/confirm_email"
            component={SignUpConfirmation}
          />
          <PrivateRoute component={Landing} path="/landing" exact />
          <Redirect path="/" to="/landing" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
