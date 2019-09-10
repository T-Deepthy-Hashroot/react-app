import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import SingleTextInput from './shared/SingleTextInput';


class Login extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: ''
        }
        this.valueChange = this.valueChange.bind(this);
      }
      valueChange(key,value){
        this.setState({[key]: value})
      }
    render(){
        return (
            <form className="col-lg-6 offset-lg-3 p-4">
              <h2>Login</h2>
                <SingleTextInput name="email" value={this.state.email} type="email" placeholder="email" valueChange={this.valueChange} />
                <SingleTextInput name="password" value={this.state.password} type="password" placeholder="password" valueChange={this.valueChange}/>
                <input className="btn btn-primary mt-2 " type="submit" value="Login"></input>
                </form>
           )
    }

}

export default Login;
